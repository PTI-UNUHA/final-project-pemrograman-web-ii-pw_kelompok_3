import { FiBookOpen, FiClock, FiUsers, FiAward, FiStar } from "react-icons/fi";
import Link from "next/link";

export default function CourseDetailPage() {
  return (
    <main className="course-detail-page">

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

      <Link href="/#home-course-cards" className="back-link">
  ← Kembali ke Daftar Beranda
</Link>


      {/* HERO */}
      <section className="course-detail-hero">
        <div className="hero-left">
          <div className="hero-tags">
            <span className="tag orange">Mobile Development</span>
            <span className="tag purple">Menengah</span>
          </div>

          <h1>Mobile App Development dengan Flutter</h1>

          <p>Kembangkan aplikasi mobile cross-platform dengan Flutter dan Dart.</p>

        <p className="mentor">
            Oleh <span className="mentor-name">Dewi Kusuma</span>
        </p>


          <div className="hero-meta">
            <span>
                <FiStar className="meta-icon" />
                <strong>4.8</strong> Rating
            </span>

            <span>
                <FiUsers className="meta-icon" />
                <strong>6.540</strong> Siswa
            </span>

            <span>
                <FiClock className="meta-icon" />
                <strong>22 jam</strong> Durasi
            </span>
        </div>

          <div className="hero-price">
            <div>
              <small>Harga</small>
              <h2>Rp 329.000</h2>
            </div>

            <button className="cta-btn">
              ▶ Mulai Belajar Sekarang
            </button>
          </div>
        </div>

        <div className="hero-right">
           <img
              src="/foto6.jpeg" // langsung dari public
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
              Kembangkan aplikasi mobile cross-platform dengan Flutter dan Dart.
            </p>
            <p>
              Kursus ini di rancang untuk memberikan pemahaman mendalam tentang topik yang dipelajari. Dengan 
              kombinasi teori dan praktik, anda akan mendapatkan skill yang langsung applicable di dunia kerja.
            </p>
          </div>

          <div className="box">
            <h3>Topik yang Dibahas</h3>
            <div className="topic-tags">
              <span>Flutter</span>
              <span>Dart</span>
              <span>Mobile</span>
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
              <b>78 Video</b>
            </div>

            <div className="info-row">
              <div className="info-left">
                <FiClock className="info-icon" />
                <span>Durasi</span>
              </div>
              <b>22 jam</b>
            </div>

            <div className="info-row">
              <div className="info-left">
                <FiUsers className="info-icon" />
                <span>Siswa Terdaftar</span>
              </div>
              <b>6.540</b>
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
