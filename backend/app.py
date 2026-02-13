from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'ok', 'message': 'Backend is running'})

@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        
        # Validate required fields
        if not all([name, email, message]):
            return jsonify({'error': 'All fields are required'}), 400
        
        # TODO: Implement email sending logic here
        # For example, using SendGrid, AWS SES, or SMTP
        # For now, we'll just log the message
        print(f"Contact form submission:")
        print(f"Name: {name}")
        print(f"Email: {email}")
        print(f"Message: {message}")
        
        return jsonify({
            'success': True,
            'message': 'Message received successfully'
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/projects', methods=['GET'])
def get_projects():
    """Get projects data (example endpoint)"""
    # This could fetch from a database or return static data
    projects = [
        {
            'id': 1,
            'title': 'Project One',
            'description': 'Description of project one',
            'technologies': ['React', 'Node.js'],
            'link': 'https://example.com',
            'github': 'https://github.com/username/project'
        }
        # Add more projects
    ]
    return jsonify(projects)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('DEBUG', 'True') == 'True'
    app.run(host='0.0.0.0', port=port, debug=debug)
