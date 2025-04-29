# Filename: chatbot_nlp_server.py

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import spacy
from pydantic import BaseModel
import google.generativeai as genai

# Initialize FastAPI
app = FastAPI()

# Allow CORS (React frontend can call backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development; restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load spaCy NLP Model (English small model)
nlp = spacy.load("en_core_web_sm")

# Initialize Google Generative AI
genai.configure(api_key="AIzaSyCDxh2tZSR58MnxZB_5LwIomFDrOLJx69s")
model = genai.GenerativeModel("gemini-2.0-flash")

# Request body model
class MessageRequest(BaseModel):
    message: str

# Utility: Extract symptom-related keywords
def extract_keywords(text):
    doc = nlp(text)
    keywords = [token.text for token in doc if token.pos_ in ("NOUN", "ADJ") and not token.is_stop]
    return " ".join(keywords)

# API endpoint
@app.post("/generate-response/")
async def generate_response(req: MessageRequest):
    # Step 1: Extract Important Keywords
    keywords = extract_keywords(req.message)

    # Step 2: Send to Generative AI
    prompt = f"""
    You are a virtual medical assistant trained to help with healthcare guidance. 
    Analyze the following keywords extracted from symptoms: {keywords}
    
    Provide a preliminary explanation and next steps. 
    Remember: This is NOT a diagnosis. Suggest visiting a doctor if symptoms worsen.
    """
    
    response = model.generate_content(prompt)

    # Step 3: Return properly extracted response
    ai_reply = response.candidates[0].content.parts[0].text

    return {
        "response": ai_reply
    }

