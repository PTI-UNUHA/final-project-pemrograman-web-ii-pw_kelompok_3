"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
   const router = useRouter(); 
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
        <nav className="navbar navbar-scrolled">
  <div className="logo">
    <div className="logo-icon">📘</div>
    <h1>Skillora</h1>
  </div>

 <ul className="menu">
  <li>
    <Link href="/">Beranda</Link>
  </li>
  <li>
    <Link href="/kursus">Kursus</Link>
  </li>
</ul>


   <Link href="/kursus#filter">
  <button className="search-btn">🔍 Cari Kursus</button>
  

</Link>
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
            
            <Link href="#popular" className="outline">
              Lihat Kursus Populer
            </Link>
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

   <section id="popular" className="popular-section">
  <span className="popular-badge">⭐ Kursus Populer</span>

  <h2 className="popular-title">Kursus Terpopuler</h2>
  <p className="popular-subtitle">
    Dipilih khusus untuk Anda berdasarkan rating tertinggi dan jumlah siswa
  </p>


<div id="home-course-cards" className="course-list">
  


    {/* CARD 1 */}
    <div className="course-card">
      <Link href="/deskripsi10" className="card-link">
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
    <div className="course-card">
      <Link href="/deskripsi11" className="card-link">
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
    <div className="course-card">
      <Link href="/deskripsi12" className="card-link">
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
    <div className="course-card">
      <Link href="/deskripsi13" className="card-link">
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
</div>
  
</section>

{/* ==== SEE ALL COURSE SECTION ==== */}
<section className="see-all">
  <Link href="/kursus#course-cards" className="see-all-btn">
    Lihat Semua Kursus →
  </Link>
</section>

{/* ==== CTA SECTION ==== */}
<section className="cta-section">
  <h2>Siap Memulai Perjalanan Belajar Anda?</h2>
  <p>
    Bergabunglah dengan ribuan siswa yang telah meningkatkan karir mereka
    bersama EduCourse
  </p>

</section>


       <div style={{ height: "50px" }}></div>

      </main>
    </>
  );
}