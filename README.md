# Yellow Taxi Trip API

Aplikasi ini adalah API untuk mendapatkan data perjalanan taksi kuning di New York City. API ini mendukung pengambilan data perjalanan secara keseluruhan dan dengan filter berdasarkan berbagai parameter.

## Fitur

- Mendapatkan data semua perjalanan taksi.
- Mendapatkan data perjalanan taksi dengan filter seperti waktu pickup, waktu dropoff, tarif minimum, tarif maksimum, jarak minimum, jarak maksimum, dan tipe pembayaran.

## Prerequisites

Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (v14.x atau lebih tinggi)
- [npm](https://www.npmjs.com/) (biasanya sudah terpasang dengan Node.js)

## Menjalankan Proyek Secara Lokal

Ikuti langkah-langkah berikut untuk mengatur dan menjalankan proyek ini secara lokal:

### 1. Clone Repository

Clone repositori ini ke komputer lokal Anda menggunakan git:

```bash
git clone https://github.com/aaridhon19/Yellow_Taxi_Trip_BE.git
cd repository-name
```

### 2. Instalation

```bash
npm install
```

### 3. Add ENV 

```bash
PORT=3100 (bebas)
API_URL=https://data.cityofnewyork.us/resource/gkne-dk5s.json
```

### 4. Start Project 

```bash
npm start
```

### 5. Access API

Mendapatkan semua perjalanan 
```bash
GET http://localhost:3100/api/trips
```

Mendapatkan perjalanan berdasarkan filter 
# Fare
```bash
GET http://localhost:3100/api/trips/filter?min_fare=2&max_fare=10
```
# Distance
```bash
GET http://localhost:3100/api/trips/filter?min_distance=1&max_distance=2
```
# Time
```bash
GET http://localhost:3100/api/trips/filter?pickup_datetime=2014-01-01T00:01:00.000&dropoff_datetime=2014-01-01T00:19:00.000
```
# Payment
```bash
GET http://localhost:3100/api/trips/filter?payment_type=UNK
```
