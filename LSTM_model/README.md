#### Depedency
to get necessary python packages
```bash
pip install -r requirement.txt
```

#### Using the model
run the following command from parent directory
```bash
python LSTM_model/Web_scrapper_and_analyzer.py
```

The output will be save on okh_dataset.json format with:
| Link | Title | Author | Date | Post_content | Sentiment |
|------|-------|--------|------|--------------|-----------|
|https://...|The Tax ...|Online ...|Feb ...|..............|0.5...|
|https://...|The Tax ...|Online ...|Feb ...|..............|0.5...|

##### Get json file with keyword
run the python program with keywords, you can give more than one keywords.
```bash
python LSTM_model/Keyword_extractor.py "kyeword_1" "keyword_2" "..."
```

The output will be save on filtered_data.json format with:
| Link | Title | Author | Date | Sentiment | Occurance |
|------|-------|--------|------|-----------|-----------|
|https://...|The Tax ...|Online ...|Feb ...|0.5...|12|
|https://...|The Tax ...|Online ...|Feb ...|0.5...|12|
