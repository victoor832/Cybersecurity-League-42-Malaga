from flask import Flask, jsonify, render_template
import requests
import json
import schedule
import time

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def fetch_and_process_data():
    # URL de la API
    url = '#'

    # Encabezados para la solicitud, incluido el token de autorización
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
    }

    try:
        # Realiza la solicitud a la API con los encabezados especificados
        response = requests.get(url, headers=headers)
        response.raise_for_status() # Esto lanzará una excepción si la solicitud falla

        # Verifica si la respuesta contiene datos
        if response.content:
            # Intenta decodificar la respuesta como JSON
            data = response.json()

            # Filtra y agrupa los datos según las palabras clave
            hades_group = []
            void_group = []
            olympus_group = []

            for item in data['data']:
                if 'hades' in item['name'].lower():
                    hades_group.append(item)
                elif 'void' in item['name'].lower():
                    void_group.append(item)
                elif 'olympus' in item['name'].lower():
                    olympus_group.append(item)

            # Calcula la suma de los puntos por grupo
            group_scores = {
                "hades": sum(item['score'] for item in hades_group),
                "void": sum(item['score'] for item in void_group),
                "olympus": sum(item['score'] for item in olympus_group)
            }

            # Devuelve los datos en formato JSON
            return jsonify(group_scores)

        else:
            return jsonify({"error": "La respuesta está vacía."})

    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"Error al obtener datos de la API: {e}"})

if __name__ == '__main__':
    app.run(debug=True)

app.config.update(
    TEMPLATES_AUTO_RELOAD=True
)
