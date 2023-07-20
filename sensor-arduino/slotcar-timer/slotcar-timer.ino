#define sensor1A 2
#define sensor2A 3
#define sensor1B 11
#define sensor2B 12
#define BUZZER A0
#define intervaloLeitura 1000000

#define distancia 200000  // 12.2 centimetros convertidos para micros

int estadoP1 = 0;
int estadoP2 = 0;

long tempoVoltaP1;
long tempoVoltaP2;
unsigned long tempoAntP1 = 0;
unsigned long tempoAntP2 = 0;
unsigned long tempoP1;
unsigned long tempoP2;

//=============================================================== SETUP
void setup() {
  Serial.begin(9600);

  pinMode(sensor1A, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(sensor1A), lerSensorP1, FALLING);
  pinMode(sensor2A, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(sensor2A), lerSensorP2, FALLING);
  pinMode(sensor1B, INPUT_PULLUP);
  pinMode(sensor2B, INPUT_PULLUP);
}


//=============================================================== LOOP
void loop() {
  if (digitalRead(sensor1B) != 1) {
    calcVeloP1();
  }
  if (digitalRead(sensor2B) != 1) {
    calcVeloP2();
  }
}


//=============================================================== FUNCTIONS
void lerSensorP1() {
  tempoP1 = micros();
  if (micros() - tempoAntP1 > intervaloLeitura) {
    tone(BUZZER, 1900, 700);
    tempoVoltaP1 = tempoP1 - tempoAntP1;
    tempoAntP1 = tempoP1;
    Serial.print("T-0-");
    Serial.println(tempoVoltaP1 / 1000);
    estadoP1 = 0;
  } else {
    tempoP1 = tempoAntP1;
  }
}

void lerSensorP2() {
  tempoP2 = micros();
  if (micros() - tempoAntP2 > intervaloLeitura) {
    tone(BUZZER, 1700, 700);
    tempoVoltaP2 = tempoP2 - tempoAntP2;
    tempoAntP2 = tempoP2;
    Serial.print("T-1-");
    Serial.println(tempoVoltaP2 / 1000);  // divide por 1000 para transformar em millis
    estadoP2 = 0;
  } else {
    tempoP2 = tempoAntP2;
  }
}

void calcVeloP1() {
  if (estadoP1 == 0) {
    float tempo = micros();
    float intervaloP1 = (float)(tempo - tempoP1);
    float velocidadeP1Km = (distancia / intervaloP1) * 3.6 * 32.0;  // 3.6(converte para km/h) 32(escala do carro)
    Serial.print("V-0-");
    Serial.println(int(velocidadeP1Km));
    estadoP1 = 1;
  }
}

void calcVeloP2() {
  if (estadoP2 == 0) {
    float tempo = micros();
    float intervaloP2 = (float)(tempo - tempoP2);
    float velocidadeP2Km = (distancia / intervaloP2) * 3.6 * 32.0;  // 3.6(converte para km/h) 32(escala do carro)
    Serial.print("V-1-");
    Serial.println(int(velocidadeP2Km));
    estadoP2 = 1;
  }
}
