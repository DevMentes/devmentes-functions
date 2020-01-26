from flask import Flask, jsonify
from flask_cors import CORS
from mocks.posts import posts
from mocks.writers import writers

app = Flask(__name__)
CORS(app)


@app.route('/')
def status():
    return 'Working fine'


@app.route('/posts', methods=['GET'])
def get_posts():
    return jsonify({
        'data': posts
    })


@app.route('/posts/<string:post_id>', methods=['GET'])
def get_post(post_id):
    post = post_by_id(posts, post_id)
    return jsonify({
        'data': post
    })


def post_by_id(posts_list, post_id):
    for post in posts_list:
        if post['id'] == post_id:
            return post


@app.route('/writers/<string:writer_id>', methods=['GET'])
def get_writer(writer_id):
    writer = writer_by_id(writers, writer_id)
    return jsonify({
        'data': writer
    })


def writer_by_id(writers_list, writer_id):
    for writer in writers_list:
        if writer['id'] == writer_id:
            return writer


@app.route('/writers/<string:writer_id>/posts', methods=['GET'])
def get_writer_posts(writer_id):
    writer_posts = posts_by_writer_id(posts, writer_id)
    return jsonify({
        'data': writer_posts
    })


def posts_by_writer_id(posts_list, writer_id):
    filtered_posts = filter(lambda post: post['writer']['id'] == writer_id, posts_list)
    return list(filtered_posts)


if __name__ == '__main__':
    app.run(debug=True)
