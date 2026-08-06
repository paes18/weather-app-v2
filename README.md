
# 🌤️ Weather App Faiz

Aplikasi cuaca sederhana berbasis **TypeScript** yang mengambil data cuaca secara real-time menggunakan **OpenWeatherMap API**.

## 📌 Fitur

- 🔍 Mencari cuaca berdasarkan nama kota.
- 🌡️ Menampilkan suhu dalam Celcius.
- ☁️ Menampilkan deskripsi cuaca.
- 💧 Menampilkan kelembapan udara.
- 🌬️ Menampilkan kecepatan angin.
- 🖼️ Mengubah ikon cuaca sesuai kondisi.
- 🎥 Mengubah background video sesuai cuaca.
- 🔐 API Key disimpan menggunakan Environment Variables (.env).

---

## 🛠️ Teknologi yang Digunakan

- HTML5
- CSS3
- TypeScript
- Vite
- OpenWeatherMap API

---

## 📁 Struktur Project

`
cuaca-v-2/
│
├── assets/
│   ├── icons/
│   └── video/
│
├── dist/
├── node_modules/
├── .env
├── .env.example
├── .gitignore
├── index.html
├── cuaca.css
├── script.ts
├── package.json
├── tsconfig.json
└── README.md
`

---

## 🚀 Cara Menjalankan Project

### 1. Clone atau download project

```bash
git clone <repository-url>
```

atau download dalam bentuk ZIP.

---

### 2. Install dependency

```bash
npm install
```

---

### 3. Buat file `.env`

Isi file `.env` seperti berikut:

```env
VITE_API_KEY=YOUR_OPENWEATHER_API_KEY
```

Ganti `YOUR_OPENWEATHER_API_KEY` dengan API Key dari OpenWeatherMap.

---

### 4. Jalankan project

```bash
npm run dev
```

Kemudian buka browser dan akses:

`
http://localhost:5173
`

---

## 📦 Build Project

Untuk membuat versi production:

```bash
npm run build
```

---

## 📖 API

Data cuaca diperoleh dari:

<https://openweathermap.org/api>

---

## 👨‍💻 Author

**Faiz Tio*

---

## 📄 Lisensi

Project ini dibuat untuk keperluan pembelajaran dan tugas kuliah.
