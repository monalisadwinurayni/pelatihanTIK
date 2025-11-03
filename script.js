<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Study Mate - SMA Negeri 1 Rengel</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    body {
      background: linear-gradient(135deg, #e3f2fd, #bbdefb);
      color: #333;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    header {
      text-align: center;
      margin-bottom: 30px;
    }

    header h1 {
      font-size: 2.2em;
      color: #1565c0;
    }

    header h2 {
      font-weight: 500;
      color: #1976d2;
    }

    main {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
      width: 100%;
      max-width: 1100px;
    }

    section {
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      padding: 20px;
      flex: 1;
      min-width: 320px;
    }

    h3 {
      text-align: center;
      margin-bottom: 15px;
      color: #0d47a1;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: center;
    }

    th {
      background-color: #1565c0;
      color: white;
      padding: 10px;
    }

    td {
      background-color: #f9f9f9;
      padding: 8px;
    }

    tr:nth-child(even) td {
      background-color: #f1f8ff;
    }

    table, th, td {
      border: 1px solid #ddd;
    }

    footer {
      margin-top: 40px;
      text-align: center;
      font-size: 0.9em;
      color: #555;
    }

    /* Tombol & form */
    button {
      margin-top: 15px;
      background-color: #1976d2;
      color: #fff;
      border: none;
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.2s;
    }

    button:hover {
      background-color: #0d47a1;
    }

    form {
      margin-top: 15px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }

    input, select {
      padding: 6px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 0.9em;
    }

    @media (max-width: 768px) {
      main {
        flex-direction: column;
        align-items: center;
      }

      section {
        width: 100%;
      }

      form {
        flex-direction: column;
        align-items: stretch;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Study Mate</h1>
    <h2>SMA Negeri 1 Rengel</h2>
  </header>

  <main>
    <!-- Jadwal Pelajaran -->
    <section id="jadwal">
      <h3>Jadwal Pelajaran</h3>
      <table id="tabelJadwal">
        <thead>
          <tr>
            <th>Jam / Hari</th>
            <th>Senin</th>
            <th>Selasa</th>
            <th>Rabu</th>
            <th>Kamis</th>
            <th>Jum'at</th>
          </tr>
        </thead>
        <tbody>
          <!-- Baris 1–13 -->
          <script>
            for (let i = 1; i <= 13; i++) {
              document.write(`<tr>
                <td>${i}</td>
                <td></td><td></td><td></td><td></td><td></td>
              </tr>`);
            }
          </script>
        </tbody>
      </table>

      <!-- Form Tambah Jadwal -->
      <form id="formJadwal">
        <select id="hari">
          <option value="">Pilih Hari</option>
          <option>Senin</option>
          <option>Selasa</option>
          <option>Rabu</option>
          <option>Kamis</option>
          <option>Jum'at</option>
        </select>
        <input type="number" id="jam" min="1" max="13" placeholder="Jam ke-" required>
        <input type="text" id="pelajaran" placeholder="Nama Pelajaran" required>
        <button type="submit">+ Tambah</button>
      </form>
    </section>

    <!-- Deadline Tugas -->
    <section id="deadline">
      <h3>Deadline Tugas</h3>
      <table id="tabelTugas">
        <thead>
          <tr>
            <th>Nama Tugas</th>
            <th>Mata Pelajaran</th>
            <th>Tanggal</th>
            <th>Bulan</th>
            <th>Tahun</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      <!-- Form Tambah Tugas -->
      <form id="formTugas">
        <input type="text" id="namaTugas" placeholder="Nama Tugas" required>
        <input type="text" id="mapelTugas" placeholder="Mata Pelajaran" required>
        <input type="number" id="tgl" placeholder="Tanggal" min="1" max="31" required>
        <input type="text" id="bulan" placeholder="Bulan" required>
        <input type="number" id="tahun" placeholder="Tahun" min="2024" required>
        <button type="submit">+ Tambah</button>
      </form>
    </section>
  </main>

  <footer>
    <p>© 2025 Study Mate | SMA Negeri 1 Rengel</p>
  </footer>

  <script>
    // ------------------------
    // FUNGSI: Tambah ke JADWAL
    // ------------------------
    const formJadwal = document.getElementById('formJadwal');
    const tabelJadwal = document.getElementById('tabelJadwal');
    const jadwalData = JSON.parse(localStorage.getItem('jadwalData')) || {};

    // render ulang data tersimpan
    for (const key in jadwalData) {
      const [hari, jam] = key.split('-');
      const kolom = ["Senin","Selasa","Rabu","Kamis","Jum'at"].indexOf(hari) + 1;
      if (kolom > 0) {
        tabelJadwal.rows[jam].cells[kolom].textContent = jadwalData[key];
      }
    }

    formJadwal.addEventListener('submit', e => {
      e.preventDefault();
      const hari = document.getElementById('hari').value;
      const jam = parseInt(document.getElementById('jam').value);
      const pelajaran = document.getElementById('pelajaran').value.trim();

      if (!hari || !pelajaran || isNaN(jam)) return alert('Lengkapi semua data!');
      const kolom = ["Senin","Selasa","Rabu","Kamis","Jum'at"].indexOf(hari) + 1;
      if (kolom < 1 || jam < 1 || jam > 13) return alert('Jam tidak valid');

      tabelJadwal.rows[jam].cells[kolom].textContent = pelajaran;

      // simpan ke localStorage
      jadwalData[`${hari}-${jam}`] = pelajaran;
      localStorage.setItem('jadwalData', JSON.stringify(jadwalData));

      formJadwal.reset();
    });

    // ------------------------
    // FUNGSI: Tambah ke TUGAS
    // ------------------------
    const formTugas = document.getElementById('formTugas');
    const tabelTugas = document.getElementById('tabelTugas').querySelector('tbody');
    const tugasData = JSON.parse(localStorage.getItem('tugasData')) || [];

    // render ulang data tugas tersimpan
    tugasData.forEach(t => tambahTugasKeTabel(t));

    function tambahTugasKeTabel(tugas) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${tugas.nama}</td>
        <td>${tugas.mapel}</td>
        <td>${tugas.tanggal}</td>
        <td>${tugas.bulan}</td>
        <td>${tugas.tahun}</td>
      `;
      tabelTugas.appendChild(tr);
    }

    formTugas.addEventListener('submit', e => {
      e.preventDefault();
      const tugas = {
        nama: document.getElementById('namaTugas').value.trim(),
        mapel: document.getElementById('mapelTugas').value.trim(),
        tanggal: document.getElementById('tgl').value,
        bulan: document.getElementById('bulan').value.trim(),
        tahun: document.getElementById('tahun').value
      };

      if (!tugas.nama || !tugas.mapel || !tugas.tanggal || !tugas.bulan || !tugas.tahun)
        return alert('Lengkapi semua data!');

      tambahTugasKeTabel(tugas);
      tugasData.push(tugas);
      localStorage.setItem('tugasData', JSON.stringify(tugasData));
      formTugas.reset();
    });
  </script>
</body>
</html>
