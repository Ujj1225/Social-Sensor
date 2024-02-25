### Depedency
```bash
pip install keras
pip install numpy
pip install tensorflow
pip install nltk
pip install scikit-learn
```

#### Using the model
LSTM_model.keras is the saved model and tokenizer is the saved tokenizer. Sentiment_aanalysis_model.py has a function that gives the sentimental analysis of the text that is passed.
```py
from Sentiment_analysis_model import get_sentiment_of_text
```
