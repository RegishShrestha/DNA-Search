import pandas as pd

data=pd.read_csv('bold_data.csv',index_col=0)
# sampleid=data['sampleid']
# # print(len(sampleid))
# # val="1256258" 
# # print(data.loc[[0]])
# sampleid=data['sampleid']==1256258
# print(data[sampleid])
# print(data)
dataa=data['sampleid']
product=dataa.values.tolist()
print(type(product))
print(product)

if 'barcode SNB 2344' in product:
    print('yes')
# if('CNCCA2123-12' in data['processid']):
#     print('yes')
# else:
#     print('no')