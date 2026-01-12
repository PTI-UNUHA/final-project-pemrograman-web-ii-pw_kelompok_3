"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function KursusPage() {
  const TOTAL_KURSUS = 9;

  const [kategori, setKategori] = useState("Semua");
  const [level, setLevel] = useState("Semua");
  const [search, setSearch] = useState("");
  const [jumlah, setJumlah] = useState(TOTAL_KURSUS);

  useEffect(() => {
    const cards = document.querySelectorAll(".course-card");
    let count = 0;

    cards.forEach((card) => {
      const cardKategori = card.dataset.category.toLowerCase();
      const cardLevel = card.dataset.level.toLowerCase();
      const text = card.innerText.toLowerCase();

      const matchKategori =
        kategori === "Semua" ||
        cardKategori === kategori.toLowerCase();

      const matchLevel =
        level === "Semua" ||
        cardLevel === level.toLowerCase();

      const matchSearch =
        search === "" || text.includes(search.toLowerCase());

      if (matchKategori && matchLevel && matchSearch) {
        card.style.display = "block";
        count++;
      } else {
        card.style.display = "none";
      }
    });

    setJumlah(count);
  }, [kategori, level, search]);

  return (
    <main className="course-page">

      {/* NAVBAR */}
      <nav className="navbar navbar-scrolled">
        <div className="logo">
          <div className="logo-icon">📘</div>
          <h1>Skillora</h1>
        </div>

        <ul className="menu">
          <li><Link href="/">Beranda</Link></li>
          <li><Link href="/kursus">Kursus</Link></li>
        </ul>

        <Link href="/kursus#filter">
          <button className="search-btn">🔍 Cari Kursus</button>
        </Link>
      </nav>

      {/* HERO */}
      <section className="course-hero-wrapper">
        <div className="course-hero">
          <div className="course-hero-inner">
            <h1>Jelajahi Semua Kursus</h1>
            <p>Temukan kursus yang sempurna untuk mengembangkan skill Anda</p>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section id="filter" className="course-filter">

        {/* SEARCH */}
        <div className="search-box">
          🔍
          <input
            type="text"
            placeholder="Cari kursus, instruktur, atau topik..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-row">
          <div className="filter-item">
            <label>📂 Kategori</label>
            <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
              <option value="Semua">Semua Kategori</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Design">Design</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Security">Security</option>
              <option value="Database">Database</option>
            </select>
          </div>

          <div className="filter-item">
            <label>🎯 Level</label>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="Semua">Semua Level</option>
              <option value="Pemula">Pemula</option>
              <option value="Menengah">Menengah</option>
            </select>
          </div>
        </div>

        {(kategori !== "Semua" || level !== "Semua" || search !== "") && (
          <div className="filter-info">
            <span>
              Menampilkan <strong>{jumlah}</strong> kursus dari{" "}
              <strong>{TOTAL_KURSUS}</strong> total kursus
            </span>

            <button
              className="clear-filter-btn"
              onClick={() => {
                setKategori("Semua");
                setLevel("Semua");
                setSearch("");
              }}
            >
              ✖ Hapus Filter
            </button>
          </div>
        )}
      </section>

      <h2 className="course-count">{jumlah} Kursus Ditemukan</h2>


    <div id="course-cards" className="course-list"></div>
    <div className="course-list">
    
    {/* CARD 1 */}
   <div
  className="course-card"
  data-category="Web Development"
  data-level="Pemula"
>
  
  <Link href="/deskripsi1" className="card-link">
    <img
    src="/foto1.jpeg" // langsung dari public
    alt="Dasar Pemrograman Web"
    className="course-img"
  />

    <div className="card-top">
      <span className="cat purple">Web Development</span>
      <span className="popular-tag">🔥 Populer</span>
    </div>

    <h3 className="course-name">
      Dasar Pemrograman Web dengan HTML, CSS & JavaScript
    </h3>

    <p className="mentor">Budi Santoso</p>

    <div className="course-info">
      ⭐ 4.8 • 👥 15.420 • ⏱ 12 jam
    </div>

    <div className="tags">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
    </div>

    <div className="card-bottom">
      <h3 className="price">Rp 199.000</h3>
      <span className="level">Pemula</span>
    </div>
  </Link>
</div>


    {/* CARD 2 */}
<div
  className="course-card"
  data-category="Web Development"
  data-level="Menengah"
>
  <Link href="/deskripsi2" className="card-link">
    <img
    src="/foto2.jpeg" // langsung dari public
    alt="Dasar Pemrograman Web"
    className="course-img"
  />

    <div className="card-top">
      <span className="cat purple">Web Development</span>
      <span className="popular-tag">🔥 Populer</span>
    </div>

    <h3 className="course-name">
      React JS - Dari Pemula hingga Mahir
    </h3>

    <p className="mentor">Siti Aminah</p>

    <div className="course-info">
      ⭐ 4.9 • 👥 12.890 • ⏱ 18 jam
    </div>

    <div className="tags">
      <span>React</span>
      <span>JavaScript</span>
      <span>Frontend</span>
    </div>

    <div className="card-bottom">
      <h3 className="price">Rp 299.000</h3>
      <span className="level">Menengah</span>
    </div>
  </Link>
</div>


    {/* CARD 3 */}
<div
  className="course-card"
  data-category="Data Science"
  data-level="Menengah"
>
  <Link href="/deskripsi3" className="card-link">
     <img
    src="/foto3.jpeg" // langsung dari public
    alt="Dasar Pemrograman Web"
    className="course-img"
  />

    <div className="card-top">
      <span className="cat purple">Data Science</span>
      <span className="popular-tag">🔥 Populer</span>
    </div>

    <h3 className="course-name">
      Python untuk Data Science & Machine Learning
    </h3>

    <p className="mentor">Dr. Ahmad Hidayat</p>

    <div className="course-info">
      ⭐ 4.7 • 👥 9.450 • ⏱ 20 jam
    </div>

    <div className="tags">
      <span>Python</span>
      <span>Data Science</span>
      <span>Machine Learning</span>
    </div>

    <div className="card-bottom">
      <h3 className="price">Rp 349.000</h3>
      <span className="level">Menengah</span>
    </div>
  </Link>
</div>



    {/* CARD 4 */}
<div
  className="course-card"
  data-category="Design"
  data-level="Pemula"
>
  <Link href="/deskripsi4" className="card-link">
     <img
    src="/foto4.jpeg" // langsung dari public
    alt="Dasar Pemrograman Web"
    className="course-img"
  />

    <div className="card-top">
      <span className="cat purple">Design</span>
    </div>

    <h3 className="course-name">
      UI/UX Design Mastery dengan Figma
    </h3>

    <p className="mentor">Rina Wijaya</p>

    <div className="course-info">
      ⭐ 4.6 • 👥 8.720 • ⏱ 15 jam
    </div>

    <div className="tags">
      <span>UI/UX</span>
      <span>Figma</span>
      <span>Design</span>
    </div>

    <div className="card-bottom">
      <h3 className="price">Rp 249.000</h3>
      <span className="level">Pemula</span>
    </div>
  </Link>
</div>


    {/* CARD 5 */}
<div
  className="course-card"
  data-category="Backend Development"
  data-level="Menengah"
>
  <Link href="/deskripsi5" className="card-link">
    <img
    src="/foto5.jpeg" // langsung dari public
    alt="Dasar Pemrograman Web"
    className="course-img"
  />

    <div className="card-top">
      <span className="cat purple">Backend Development</span>
    </div>

    <h3 className="course-name">
      Node.js & Express - Backend Development
    </h3>

    <p className="mentor">Andi Prasetyo</p>

    <div className="course-info">
      ⭐ 4.7 • 👥 7.890 • ⏱ 16 jam
    </div>

    <div className="tags">
      <span>Node.js</span>
      <span>Express</span>
      <span>Backend</span>
    </div>

    <div className="card-bottom">
      <h3 className="price">Rp 279.000</h3>
      <span className="level">Menengah</span>
    </div>
  </Link>
</div>


    {/* CARD 6 */}
<div
  className="course-card"
  data-category="Mobile Development"
  data-level="Menengah"
>
  <Link href="/deskripsi6" className="card-link">
     <img
    src="/foto6.jpeg" // langsung dari public
    alt="Dasar Pemrograman Web"
    className="course-img"
  />
    <div className="card-top">
      <span className="cat purple">Mobile Development</span>
      <span className="popular-tag">🔥 Populer</span>
    </div>

    <h3 className="course-name">
      Mobile App Development dengan Flutter
    </h3>

    <p className="mentor">Dewi Kusuma</p>

    <div className="course-info">
      ⭐ 4.8 • 👥 6.540 • ⏱ 22 jam
    </div>

    <div className="tags">
      <span>Flutter</span>
      <span>Dart</span>
      <span>Mobile</span>
    </div>

    <div className="card-bottom">
      <h3 className="price">Rp 329.000</h3>
      <span className="level">Menengah</span>
    </div>
  </Link>
</div>

    {/* CARD 7 */}
<div
  className="course-card"
  data-category="Marketing"
  data-level="Pemula"
>
  <Link href="/deskripsi7" className="card-link">
     <img
    src="/foto7.jpeg" // langsung dari public
    alt="Dasar Pemrograman Web"
    className="course-img"
  />

    <div className="card-top">
      <span className="cat purple">Marketing</span>
    </div>

    <h3 className="course-name">
      Digital Marketing untuk Pemula
    </h3>

    <p className="mentor">Hendra Gunawan</p>

    <div className="course-info">
      ⭐ 4.5 • 👥 11.230 • ⏱ 10 jam
    </div>

    <div className="tags">
      <span>Marketing</span>
      <span>Digital</span>
      <span>SEO</span>
    </div>

    <div className="card-bottom">
      <h3 className="price">Rp 179.000</h3>
      <span className="level">Pemula</span>
    </div>
  </Link>
</div>

     {/* CARD 8 */}
<div
  className="course-card"
  data-category="Security"
  data-level="Menengah"
>
  <Link href="/deskripsi8" className="card-link">
     <img
    src="/foto8.jpeg" // langsung dari public
    alt="Dasar Pemrograman Web"
    className="course-img"
  />

    <div className="card-top">
      <span className="cat purple">Security</span>
    </div>

    <h3 className="course-name">
      Cyber Security Fundamentals
    </h3>

    <p className="mentor">Ir. Bambang Sutopo</p>

    <div className="course-info">
      ⭐ 4.9 • 👥 4.560 • ⏱ 18 jam
    </div>

    <div className="tags">
      <span>Security</span>
      <span>Networking</span>
      <span>Ethical Hacking</span>
    </div>

    <div className="card-bottom">
      <h3 className="price">Rp 399.000</h3>
      <span className="level">Menengah</span>
    </div>
  </Link>
</div>

     {/* CARD 9 */}
<div
  className="course-card"
  data-category="Database"
  data-level="Pemula"
>
  <Link href="/deskripsi9" className="card-link">
    <img
    src="/foto9.jpeg" // langsung dari public
    alt="Dasar Pemrograman Web"
    className="course-img"
  />

    <div className="card-top">
      <span className="cat purple">Database</span>
    </div>

    <h3 className="course-name">
      SQL & Database Management
    </h3>

    <p className="mentor">Linda Setiawan</p>

    <div className="course-info">
      ⭐ 4.6 • 👥 9.870 • ⏱ 14 jam
    </div>

    <div className="tags">
      <span>SQL</span>
      <span>Database</span>
      <span>MySQL</span>
    </div>

    <div className="card-bottom">
      <h3 className="price">Rp 219.000</h3>
      <span className="level">Pemula</span>
    </div>
  </Link>
</div>
  </div>

       <footer className="footer footer-course">
  <div className="footer-container">

    {/* BRAND */}
    <div className="footer-brand">
      <h2>Skillora</h2>
      <p>
        Platform kursus online terbaik untuk meningkatkan skill dan
        mengembangkan karir Anda bersama instruktur berpengalaman.
      </p>
    </div>

    {/* QUICK LINKS */}
    <div className="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Beranda</a></li>
        <li><a href="/kursus">Semua Kursus</a></li>
        <li><a href="/tentang">Tentang Kami</a></li>
        <li><a href="/instruktur">Instruktur</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>

    {/* KATEGORI */}
    <div className="footer-col">
      <h4>Kategori</h4>
      <ul>
        <li>Web Development</li>
        <li>Data Science</li>
        <li>Design</li>
        <li>Mobile Development</li>
        <li>Marketing</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div className="footer-col">
      <h4>Hubungi Kami</h4>
      <p>Jl. Pendidikan No. 123,<br />Jakarta Selatan, Indonesia</p>
      <p>📞 +62 812 3456 7890</p>
      <p>✉️ info@skillora.id</p>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="footer-bottom">
    <p>© 2024 Skillora. All rights reserved.</p>

    <div className="footer-policy">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Cookie Policy</a>
    </div>
  </div>
</footer>

    </main>
  );
}
