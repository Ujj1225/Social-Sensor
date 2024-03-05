#### Depedency
to get necessary python packages
```bash
python install -r requirement.txt
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

Key words ko lagi Post_content vitra keyword xa ki xaina jasari herana.
Yet coti webscrapp garepaxi feri thyo link lai check gradina tei vara first time badi time lagla. Cuda setup  gerko xau vana GPU vatai webscrapp garxa ra xito hunxa.
