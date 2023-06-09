from flask import Flask, jsonify,request
# from flask_mongoengine import MongoEngine
from flask_pymongo import PyMongo
from mongoengine import Document, StringField, ListField, DateTimeField, EmbeddedDocumentField
from datetime import datetime
import pickle
import pandas as pd
from sklearn.model_selection import train_test_split
import xgboost as xgb
import shap
from sklearn.metrics import accuracy_score
from bson.objectid import ObjectId
from flask_cors import CORS



app = Flask(__name__)
CORS(app)


app.config["MONGO_URI"] = "mongodb+srv://passage:passage@passage.nqhlfcy.mongodb.net/hackathon"
mongo = PyMongo(app)
# make sure collection name is right
workflow_db=mongo.db["Model"]

# class WorkflowStatus(db.Document):
#     name = db.StringField(choices=["FetchingData", "ProcessingData", "Training", "Ready"])

# class Workflow(db.Document):
#     createdAt = db.DateTimeField(default=datetime.utcnow)
#     updatedAt = db.DateTimeField(default=datetime.utcnow)
#     name = db.StringField(required=True)
#     goal = db.StringField(required=True)
#     relevantEvents = db.ListField(db.StringField(), default=list)
#     status = db.ReferenceField(WorkflowStatus)
#     workflowRuns = db.ListField(db.ReferenceField('WorkflowRun'), default=list)


# class WorkflowRun(db.Document):
    # meta = {'collection': 'workflowrun'}
    # createdAt = db.DateTimeField(default=datetime.utcnow)
    # updatedAt = db.DateTimeField(default=datetime.utcnow)
    # workflow = db.ReferenceField(Workflow)
    # worflowId = db.StringField()
    # triggeredBy = db.StringField()



# event types
# event_types=['Start Session' 'Receive Push Notification' 'Main Landing Screen'
#  'Edit Profile' 'End Session' 'Search Contacts' 'Search Channels'
#  'Send Message' 'Create Channel' 'Invite Contact To Channel'
#  'React with Emoji' 'Invite New Contact' 'Join Channel'
#  'Subscription Landing Screen' 'Search Message History'
#  'View Account Analytics' 'Welcome' 'Activate Account' 'User Sign Up'
#  'Add Integration' 'Contact Sales' 'Cancel Subscription'
#  'Upgrade Subscription' 'Renew Subscription' 'Submit Support Request'
#  'Error Screen']
event_types=['Cancel Subscription',
 'Start Session',
 'Renew Subscription',
 'Receive Push Notification',
 'Subscription Landing Screen']


def start_workflow(workflowId):
  workflow_collection = db["Workflow"]
  workflow_collection.update_one({
      "_id": workflowId 
  }, { 
      "$set": {"status": 'Training'}
  })


def load_data_from_mongodb(collection_name, query={}, no_id=True):
    """Load data from MongoDB and return it as a pandas DataFrame."""
    
    # Connect to MongoDB

    collection = mongo.db[collection_name]
    print(collection)
    print("found collection")
    # Execute the query
    cursor = collection.find(query)
    print(cursor)
    print("found query")
    # Load the data to a pandas DataFrame
    
    df = pd.DataFrame(list(cursor))
    print("Loaded into dataframe")
    # Delete the _id column
    if no_id:
        del df['_id']

    return df

def save_df_to_pickle(df, filename):
    """Save DataFrame to a pickle file."""
    with open(filename, 'wb') as f:
        pickle.dump(df, f)


def load_df_from_pickle(filename):
    """Load DataFrame from a pickle file."""
    with open(filename, 'rb') as f:
        df = pickle.load(f)
    return df

def extract_base_features(df, event_types):
    # Convert the timestamp fields to datetime format
    df['server_received_time'] = pd.to_datetime(df['server_received_time'])
    df['event_time'] = pd.to_datetime(df['event_time'])
    df['client_upload_time'] = pd.to_datetime(df['client_upload_time'])
    df['server_upload_time'] = pd.to_datetime(df['server_upload_time'])
    df['client_event_time'] = pd.to_datetime(df['client_event_time'])

    # Extract week from the timestamp
    df['week'] = df['event_time'].dt.isocalendar().week

    # Initialize a dictionary to store the features
    features = {}

    # Group by organization_name and week
    grouped = df.groupby(['organization_name', 'week'])

    # Extract features
    num_sessions = grouped['session_id'].nunique()
    features['num_sessions'] = num_sessions
    features['avg_session_length'] = grouped['session_id'].apply(lambda x: (df['server_received_time'].max() - df['server_received_time'].min()).total_seconds()) / num_sessions
    features['num_events'] = grouped['event_id'].count()

    # Calculate average session length
    start_sessions = df[df['event_type'] == 'Start Session'].copy()
    end_sessions = df[df['event_type'] == 'End Session'].copy()
    sessions = pd.merge(start_sessions, end_sessions, on=['session_id', 'organization_name', 'week'], suffixes=('_start', '_end'))
    sessions['session_length'] = (sessions['event_time_end'] - sessions['event_time_start']).dt.total_seconds()
    avg_session_length = sessions.groupby(['organization_name', 'week'])['session_length'].mean()
    features['avg_session_length'] = avg_session_length


    # Loop over the event types
    for event_type in event_types:
        # Filter the data for the current event type
        df_event_type = df[df['event_type'] == event_type]

        # Group by organization_name and week
        grouped = df_event_type.groupby(['organization_name', 'week'])

        # Extract feature
        features[f'num_{event_type}_events'] = grouped['event_id'].count()

    # Combine features into a single DataFrame
    features_df = pd.DataFrame(features)

    # Reset the index
    features_df.reset_index(inplace=True)

    # Pivot the DataFrame
    features_df = features_df.pivot(index='organization_name', columns='week')

    return features_df


def join_features_with_salesforceData(features_df, result_key, result_value):
    # Connect to MongoDB
    
    # accountsCollection = mongo.db["SalesforceData_accounts"]
    # opportunitiesCollection = mongo.db["SalesforceData_opportunities"]


    # # Query the salesforce_contacts collection

    # contacts = pd.DataFrame(list(accountsCollection.find({})))

    # # Rename the 'Name' column in contacts to 'organization_name'
    # contacts.rename(columns={'Name': 'organization_name'}, inplace=True)

    # # Keep only the required columns
    # contacts = contacts[['organization_name', 'Industry', 'AnnualRevenue', 'NumberOfEmployees']]

    # # Query the Opportunities collection
    # print("Oppurtunities collection")
    # print(opportunitiesCollection)
    # opportunities = pd.DataFrame(list(opportunitiesCollection.find({}).limit(100000)))
    # print("got oppurtunities")

    # # Convert the 'CloseDate' column to datetime format
    # opportunities['CloseDate'] = pd.to_datetime(opportunities['CloseDate'])

    # # Filter the opportunities to only include closed opportunities
    # closed_opportunities = opportunities[opportunities['StageName'] == 'Closed']

    # # Calculate the number of closed opportunities for each organization
    # num_closed_opportunities = closed_opportunities.groupby('organization_name').size()

    # # Calculate the most recent contract value for each organization
    # most_recent_contract_value = closed_opportunities.sort_values('CloseDate').groupby('organization_name').last()['Amount']

    # # Calculate the average contract value for each organization
    # average_contract_value = closed_opportunities.groupby('organization_name')['Amount'].mean()

    # # Determine whether the most recent opportunity for each organization ended with 'StageName' = 'Closed'
    # most_recent_opportunity_stage = opportunities.sort_values('CloseDate').groupby('organization_name').last()[result_key]
    # result = most_recent_opportunity_stage == result_value

    # # Add these features to the contacts DataFrame
    # contacts['num_closed_opportunities'] = contacts['organization_name'].map(num_closed_opportunities)
    # contacts['contract_value'] = contacts['organization_name'].map(most_recent_contract_value)
    # contacts['average_contract_value'] = contacts['organization_name'].map(average_contract_value)
    # contacts['result'] = contacts['organization_name'].map(result)

    # # Join the features DataFrame with the contacts DataFrame
    # joined_df = pd.merge(features_df, contacts, on='organization_name', how='inner')
    # GOING TO PICKLE JOINED DF
    joined_df=pd.read_pickle('joined_df.pkl')
    return joined_df


def dataPreprocessing(workflow_id):
    # SET TO FETCHING DATA
    print(workflow_id)
    updated_status = {"$set": {'status' : "FetchingData"}}
    filt = {'_id' : ObjectId(workflow_id)}
    workflow_db.update_one(filt, updated_status)


    # print("done3")
    # collection_frame= load_data_from_mongodb("Amplitude_data")
    # print("done4")
    # save_df_to_pickle(collection_frame, 'Amplitude_data.pkl')
    
    # READ PKLED DATA
    # collection_frame = pd.read_pickle('Amplitude_data.pkl')
    
    # SET TO PROCESSING DATA
    updated_status = {"$set": {'status' : "ProcessingData"}}
    filt = {'_id' : ObjectId(workflow_id)}
    workflow_db.update_one(filt, updated_status)

    # extracted_features = extract_base_features(collection_frame, event_types)
    
    # # what are stageName and Won
    # final_df = join_features_with_salesforceData(extracted_features, "StageName", "Won")
    # print("got final df")
    # flattenedDf = final_df.copy()

    # flattenedDf.columns = final_df.columns.map(lambda x: '_'.join(map(str, x)) if isinstance(x, tuple) else x)

    # flattenedDf = flattenedDf.drop("organization_name", axis=1)
    # print(flattenedDf.columns)
    # print(flattenedDf)
    # dummyDf = pd.get_dummies(flattenedDf, columns=['Industry'])
    dummyDf=pd.read_pickle("dummyDf.pkl")
    print("Dummydf")
    print(dummyDf.columns)

    # Prepare the data
    X = dummyDf.drop('result', axis=1)
    y = dummyDf['result']

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    print("got the splits")
    return X_train, X_test, y_train, y_test


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/model/<workflow_id>/train", methods=["POST"])
def train_workflow(workflow_id):
    
    # Split the data into training and testing sets
    print("Done1")
    X_train, X_test, y_train, y_test =dataPreprocessing(workflow_id)
    print("Done2")
    # Convert the data into DMatrix format for XGBoost
    dtrain = xgb.DMatrix(X_train, label=y_train)
   

    # Define the parameters for the XGBoost model
    param = {
        'max_depth': 3,  # the maximum depth of each tree
        'eta': 0.3,  # the training step for each iteration
        'silent': 1,  # logging mode - quiet
        'objective': 'binary:logistic',  # error evaluation for binary classification
        'eval_metric': 'auc',  # evaluation metric
        'seed': 42
    }
    num_round = 10  # the number of training iterations

    # Train the XGBoost model
    # SET TO TRAINING DATA
    updated_status = {"$set": {'status' : "Training"}}
    filt = {'_id' : ObjectId(workflow_id)}
    workflow_db.update_one(filt, updated_status)


    bst = xgb.train(param, dtrain, num_round)
    
    # SET TO READY
    updated_status = {"$set": {'status' : "Ready"}}
    filt = {'_id' : ObjectId(workflow_id)}
    workflow_db.update_one(filt, updated_status)

    # STORE BST
    with open('model.pkl'+workflow_id, 'wb') as f:
        pickle.dump(bst, f)
    # WHAT DO WE RETURN HERE
    return jsonify({"done":"done"})






@app.route("/model/<workflow_id>/run", methods=["POST"])
def get_workflow(workflow_id):
    # LOAD IN TREE
    
    bst=None
    with open('model.pkl'+workflow_id, 'rb') as f:
        bst = pickle.load(f)
    
    X_train, X_test, y_train, y_test =dataPreprocessing(workflow_id)

    updated_status = {"$set": {'status' : "Ready"}}
    filt = {'_id' : ObjectId(workflow_id)}
    workflow_db.update_one(filt, updated_status)
    # Convert the data into DMatrix format for XGBoost
   
    dtest = xgb.DMatrix(X_test, label=y_test)

    
    preds = bst.predict(dtest)
    preds_binary = [1 if pred > .9 else 0 for pred in preds]
    # print(preds_binary)
    # print( [x for x in y_test if x == False])
    # print([p for p in preds_binary if p == 0])
    accuracy = accuracy_score(y_test, preds_binary)

    # print(f"Accuracy: {accuracy}")
    updated_accuracy = {"$set": {'accuracy' : accuracy}}
    filt = {'_id' : ObjectId(workflow_id)}
    workflow_db.update_one(filt, updated_accuracy)
    print(request.json.get('triggeredBy'))
    print("ran succesfully")

    explainer = shap.TreeExplainer(bst)
    
    shap_values = explainer.shap_values(X_test)
    print("ABOUT TO GET SHAP VALUES")
    # Get the SHAP values for the first instance
    shap_values_first_instance = shap_values[0,:]

    # Create a DataFrame with the feature names and SHAP values
    df_shap_values = pd.DataFrame(list(zip(X_test.columns, shap_values_first_instance)), columns=['Feature', 'SHAP Value'])
    
    modelRunObject={
        "createdAt":datetime.now(),
        "updatedAt":datetime.now(),
        "modelId":workflow_id,
        "triggeredBy":request.json.get('triggeredBy'),
        "explanation":df_shap_values.to_json(orient='records')
    } 
    result=mongo.db["ModelRun"].insert_one(modelRunObject)
    newId=result.inserted_id
    
    # print(result.inserted_id)
    return jsonify({"accuracy":accuracy,"id":str(newId)})


    # # Get the SHAP values for the first instance
    # shap_values_first_instance = shap_values[0,:]

    # # Create a DataFrame with the feature names and SHAP values
    # df_shap_values = pd.DataFrame(list(zip(X_test.columns, shap_values_first_instance)), columns=['Feature', 'SHAP Value'])

    # # Print the DataFrame
    # print(df_shap_values)
