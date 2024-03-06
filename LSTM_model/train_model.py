# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # #                   Imports                         # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

import re
import json
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from numpy import asarray
from numpy import zeros
from nltk.corpus import stopwords
from keras.preprocessing.text import  Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.models import Sequential
from keras.layers import Embedding, LSTM, Dense
from sklearn.model_selection import train_test_split


# # # Function to clean text # # #
def preprocess_text(text):
    # Lowercase all the strings
    sentence = text.lower()

    # Remove html tags
    sentence = re.compile(r'<[^>]+>').sub('', sentence)

    # Remove punctuations and numbers
    sentence = re.sub('[^a-zA-Z]', ' ', sentence)

    # Single character removal
    sentence = re.sub(r"\s+[a-zA-Z]\s+", ' ', sentence)

    # Remove multiple spaces
    sentence = re.sub(r'\s+', ' ', sentence)

    # Remove Stopwords
    pattern = re.compile(r'\b(' + r'|'.join(stopwords.words('english')) + r')\b\s*')
    sentence = pattern.sub('', sentence)

    return sentence

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 




# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # #                   Preprocessing                   # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

# loading datasets
dataset_path = 'Reddit_and_Twitter_dataset.csv'
sentence_label_on_dataset = 'clean_comment'
category_label_on_dataset = 'category'
movie_reviews = pd.read_csv(dataset_path)


# assigning X and Y to the sentences and evaluation
X = []
sentences = list(movie_reviews[sentence_label_on_dataset])
for sen in sentences: X.append(preprocess_text(str(sen)))

y = movie_reviews[category_label_on_dataset]
y = np.array(list(map(lambda x: 0 if x<1 else 1, y)))
# y = np.array(list(map(lambda x: (x+1)/2, y)))
# y = np.array(list(map(lambda x: 1 if x=="positive" else 0, y)))


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=42)

# Building a tokenizer
word_tokenizer = Tokenizer()
word_tokenizer.fit_on_texts(X_train)

# tokenizing the sentences
X_train = word_tokenizer.texts_to_sequences(X_train)
X_test = word_tokenizer.texts_to_sequences(X_test)

vocab_length = len(word_tokenizer.word_index) + 1
maxlen = 100

X_train = pad_sequences(X_train, padding='post', maxlen=maxlen)
X_test = pad_sequences(X_test, padding='post', maxlen=maxlen)

# Vectorization of words
embeddings_dictionary = dict()
glove_file_path = 'glove_word_embedding.txt'
glove_file = open(glove_file_path, encoding="utf8")

for line in glove_file:
    records = line.split()
    word = records[0]
    vector_dimensions = asarray(records[1:], dtype='float32')
    embeddings_dictionary [word] = vector_dimensions
glove_file.close()

embedding_matrix = zeros((vocab_length, 100))
for word, index in word_tokenizer.word_index.items():
    embedding_vector = embeddings_dictionary.get(word)
    if embedding_vector is not None:
        embedding_matrix[index] = embedding_vector

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 




# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # #                   Training                        # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

# Building a model
lstm_model = Sequential()
embedding_layer = Embedding(vocab_length, 100, weights=[embedding_matrix], input_length=maxlen , trainable=False)

lstm_model.add(embedding_layer)
lstm_model.add(LSTM(128))

lstm_model.add(Dense(1, activation='sigmoid'))

lstm_model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['acc'])
print(lstm_model.summary())

# Training
lstm_model_history = lstm_model.fit(X_train, y_train, batch_size=128, epochs=100, validation_split=0.2)

score = lstm_model.evaluate(X_test, y_test)

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 




# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # #                   Evaluation                      # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

print("Test Score:", score[0])
print("Test Accuracy:", score[1])

plt.plot(lstm_model_history.history['acc'])
plt.plot(lstm_model_history.history['val_acc'])

plt.title('model accuracy')
plt.ylabel('accuracy')
plt.xlabel('epoch')
plt.legend(['train','test'], loc='upper left')
plt.show()

plt.plot(lstm_model_history.history['loss'])
plt.plot(lstm_model_history.history['val_loss'])

plt.title('model loss')
plt.ylabel('loss')
plt.xlabel('epoch')
plt.legend(['train','test'], loc='upper left')
plt.show()

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 




# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # #                   Saving                          # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

# Saving the model
lstm_model.save("LSTM_model.keras")

# Saving the tokenizer
tokenizer_json = word_tokenizer.to_json()
with open('tokenizer.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(tokenizer_json, ensure_ascii=False))

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
