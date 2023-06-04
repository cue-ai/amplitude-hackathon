from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/workflow/<workflow_id>/train", methods=["POST"])
def train_workflow(workflow_id):
    return f"Workflow {workflow_id}"


@app.route("/workflow/<workflow_id>/run", methods=["POST"])
def get_workflow(workflow_id):
    return f"Workflow {workflow_id}"
