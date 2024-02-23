from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

def gauti_paveiksliuku_sarasa(folderio_pavadinimas):
    paveiksliuku_masyvas = []

    try:
        # Gauti dabartinį darbinį katalogą
        dabartinis_katalogas = os.getcwd()

        # Sudarykite visą kelią iki paveiksliukų folderio
        paveiksliuku_folderio_kelias = os.path.join(dabartinis_katalogas, folderio_pavadinimas)

        # Tikrinti, ar paveiksliukų folderis egzistuoja
        if os.path.isdir(paveiksliuku_folderio_kelias):
            # Iteruoti per visus failus paveiksliukų folderyje
            for failo_pavadinimas in os.listdir(paveiksliuku_folderio_kelias):
                # Patikrinti, ar objektas yra failas
                if os.path.isfile(os.path.join(paveiksliuku_folderio_kelias, failo_pavadinimas)):
                    paveiksliuku_masyvas.append(failo_pavadinimas)
                else:
                    print(f"{failo_pavadinimas} nėra failas ir bus praleistas.")
        else:
            print(f"Paveiksliukų folderis '{folderio_pavadinimas}' neegzistuoja.")
    except Exception as e:
        print(f"Įvyko klaida: {str(e)}")

    return paveiksliuku_masyvas

# Sukurti pagrindinį maršrutą
@app.route('/')
def index():
    paveiksliuku_folderio_pavadinimas = "paveiksliukai"
    paveiksliuku_masyvas = gauti_paveiksliuku_sarasa(paveiksliuku_folderio_pavadinimas)
    return render_template('index.html', paveiksliuku_masyvas=paveiksliuku_masyvas)

if __name__ == '__main__':
    app.run(debug=True)
