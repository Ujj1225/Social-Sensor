import pandas as pd

existing_file_path = 'okh_dataset.csv'
df_existing = pd.read_csv(existing_file_path)

key_words = ["Prime Minister", "Pushpa Kamal Dahal"]


def count_occ(post_string):
    count = 0
    for keyword in key_words:
        count += post_string.lower().count(keyword.lower())
    return count


for i in range(len(df_existing)):
    occurrences = count_occ(df_existing['Post_content'][i])
    if occurrences > 0:
        print(df_existing['Title'][i])
        print(df_existing['Link'][i])
        print('Occurrences: ', occurrences)
        print('Author: ', df_existing['Author'][i])
        print('Date: ', df_existing['Date'][i])
