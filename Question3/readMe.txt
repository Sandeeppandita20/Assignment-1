pip install pypdf

pip install langchain

from langchain.document_loaders import PyPDFLoader

loader = PyPDFLoader("https://layout-parser.readthedocs.io/_/downloads/en/latest/pdf/")
pages = loader.load_and_split()

pages[0]
?? comments 
Document(page_content='Layout Parser\nRelease 0.3.2\nLayout Parser Contributors\nApr 02, 2022', metadata={'source': 'https://layout-parser.readthedocs.io/_/downloads/en/latest/pdf/', 'page': 0})
??


import os
import getpass

os.environ['OPENAI_API_KEY'] = getpass.getpass('OpenAI API Key:')

from langchain.vectorstores import FAISS
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.document_loaders import TextLoader
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS

from langchain.vectorstores.faiss import FAISS
from langchain.embeddings import OpenAIEmbeddings
import pickle

pip install openai faiss-cpu requests beautifulsoup4 tiktoken dagster_managed_elements langchain dagster dagster-airbyte dagit

faiss_index = FAISS.from_documents(pages, OpenAIEmbeddings())

docs = faiss_index.similarity_search("How will the community be engaged?", k=2)

for doc in docs:
    print(str(doc.metadata["page"]) + ":", doc.page_content[:300])
