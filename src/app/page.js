"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [showCategoryBar, setShowCategoryBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowCategoryBar(true);
      } else {
        setShowCategoryBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      

      <main className="main">
        <nav className="navbar">
          <div className="logo">
            <div className="logo-icon">📘</div>
            <h1>EduCourse Icha</h1>
          </div>

          <ul className="menu">
            <li>Beranda</li>
            <li>Kursus</li>
          </ul>

          <button className="search-btn">🔍 Cari Kursus</button>
        </nav>

        <section className="hero">
          <span className="badge">Platform Kursus Online Terbaik</span>

          <h2 className="title">
            Tingkatkan <span className="highlight">Skill</span> Anda
            <br />
            dengan Kursus Berkualitas
          </h2>

          <p className="subtitle">
            Belajar dari instruktur terbaik dengan ribuan kursus
            yang dirancang untuk mengembangkan karir Anda
          </p>

          <div className="btn-group">
            <button className="primary">Jelajahi Kursus →</button>
            <button className="outline">Lihat Kursus Populer</button>
          </div>
        </section>

      
        <section className="stats">
  <div className="stat-card">
    <div className="icon blue">📘</div>
    <h2>500+</h2>
    <p>Kursus Tersedia</p>
  </div>

  <div className="stat-card">
    <div className="icon purple">👥</div>
    <h2>50K+</h2>
    <p>Siswa Aktif</p>
  </div>

  <div className="stat-card">
    <div className="icon green">🏅</div>
    <h2>100+</h2>
    <p>Instruktur Expert</p>
  </div>
</section>

    <section className="popular-section">
  <span className="popular-badge">⭐ Kursus Populer</span>

  <h2 className="popular-title">Kursus Terpopuler</h2>
  <p className="popular-subtitle">
    Dipilih khusus untuk Anda berdasarkan rating tertinggi dan jumlah siswa
  </p>

  <div className="course-list">

    {/* CARD 1 */}
    <div className="course-card">
      <img
        src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
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
    </div>

    {/* CARD 2 */}
    <div className="course-card">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
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
    </div>

    {/* CARD 3 */}
    <div className="course-card">
      <img
        src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51"
        className="course-img"
      />

      <div className="card-top">
        <span className="cat green">Data Science</span>
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
    </div>

    <div className="course-card">
      <img
        src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51"
        className="course-img"
      />

      <div className="card-top">
        <span className="cat green">Data Science</span>
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
    </div>

  </div>
</section>

{/* ==== SEE ALL COURSE SECTION ==== */}
<section className="see-all">
  <button className="see-all-btn">
    Lihat Semua Kursus →
  </button>
</section>

{/* ==== CTA SECTION ==== */}
<section className="cta-section">
  <h2>Siap Memulai Perjalanan Belajar Anda?</h2>
  <p>
    Bergabunglah dengan ribuan siswa yang telah meningkatkan karir mereka
    bersama EduCourse
  </p>

  <button className="cta-btn">
    Mulai Sekarang →
  </button>
</section>


       <div style={{ height: "80px" }}></div>

      </main>
    </>
  );
}