from flask import Flask, render_template, request, jsonify
import nltk
from newspaper import Article
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

nltk.download('punkt')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/summarize', methods=['POST'])
def summarize():
    if request.method == 'POST':
        data = request.get_json()
        url = data['url']
        article = Article(url)
        article.download()
        article.parse()
        title = article.title
        authors = article.authors
        publish_date = article.publish_date
        summary = article.summary
        return jsonify({'title': title, 'authors': authors, 'publish_date': publish_date, 'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)



import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation

text = "dummy text...."
stopwords = list(STOP_WORDS)
nlp=spacy.load(en_core_web_en)
doc = nlp(text)
tokens = [token.text for token in doc]
