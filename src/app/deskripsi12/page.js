import { FiBookOpen, FiClock, FiUsers, FiAward, FiStar } from "react-icons/fi";
import Link from "next/link";

export default function CourseDetailPage() {
  return (
    <main className="course-detail-page">

    <nav className="navbar navbar-scrolled">
  <div className="logo">
    <div className="logo-icon">📘</div>
    <h1>EduCourse</h1>
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

     <Link href="/#home-course-cards" className="back-link">
  ← Kembali ke Daftar Beranda
</Link>

      {/* HERO */}
      <section className="course-detail-hero">
        <div className="hero-left">
          <div className="hero-tags">
            <span className="tag orange">Data Science </span>
            <span className="tag purple">Menengah</span>
          </div>

          <h1>Python untuk Data Science & Machine Learning</h1>

          <p>
            Belajar Python untuk analisis data dan machine learning dengan project real-world.
          </p>

        <p className="mentor">
            Oleh <span className="mentor-name">Dr. Ahmad Hidayat</span>
        </p>


          <div className="hero-meta">
            <span>
                <FiStar className="meta-icon" />
                <strong>4.7</strong> Rating
            </span>

            <span>
                <FiUsers className="meta-icon" />
                <strong>9.450 </strong> Siswa
            </span>

            <span>
                <FiClock className="meta-icon" />
                <strong>20 jam</strong> Durasi
            </span>
        </div>

          <div className="hero-price">
            <div>
              <small>Harga</small>
              <h2>Rp 349.000</h2>
            </div>

            <button className="cta-btn">
              ▶ Mulai Belajar Sekarang
            </button>
          </div>
        </div>

        <div className="hero-right">
           <img
              src="/foto3.jpeg" // langsung dari public
              alt="Dasar Pemrograman Web"
              className="course-img"
            />
        </div>
      </section>

      {/* CONTENT */}
      <section className="course-content">

        {/* LEFT */}
        <div className="content-left">
          <div className="box">
            <FiAward className="info-icon" />
            <h3>Yang Akan Anda Pelajari</h3>
            <ul className="check-list">
              <li>Memahami konsep fundamental</li>
              <li>Best practices industri</li>
              <li>Teknik problem solving</li>
              <li>Praktik dengan project nyata</li>
              <li>Tips dan trik dari expert</li>
              <li>Sertifikat completion</li>
            </ul>
          </div>

          <div className="box">
            <h3>Tentang Kursus Ini</h3>
            <p>
             Belajar Python untuk analisis data dan machine learning dengan project real-world.
            </p>
            <p>
            Kursus ini dirancang untuk memberikan pemahaman mendalam tentang topik yang dipelajari. 
            Dengan kombinasi teori dan praktik, anda akan mendapatkan skil yang langsung applicable di 
            dunia kerja.
            </p>
          </div>

          <div className="box">
            <h3>Topik yang Dibahas</h3>
            <div className="topic-tags">
              <span>Python   </span>
              <span>Data Science </span>
              <span>Machine Learning</span>
            </div>
          </div>
        </div>

        {/* RIGHT – INFO */}
        <aside className="content-right">
          <div className="info-box">
            <h3>Informasi Kursus</h3>

            <div className="info-row">
              <div className="info-left">
                <FiBookOpen className="info-icon" />
                <span>Total Pembelajaran</span>
              </div>
              <b>65</b>
            </div>

            <div className="info-row">
              <div className="info-left">
                <FiClock className="info-icon" />
                <span>Durasi</span>
              </div>
              <b>20 jam</b>
            </div>

            <div className="info-row">
              <div className="info-left">
                <FiUsers className="info-icon" />
                <span>Siswa Terdaftar</span>
              </div>
              <b>9.450</b>
            </div>

            <div className="info-row">
              <div className="info-left">
                <FiAward className="info-icon" />
                <span>Level</span>
              </div>
              <b>Menengah</b>
            </div>

            <button className="info-btn">
              Daftar Sekarang
            </button>
          </div>
        </aside>

      </section>
    </main>
  );
}
