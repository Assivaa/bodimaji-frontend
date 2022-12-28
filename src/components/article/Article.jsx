import React, { useEffect, useState } from "react";
import "./article.css";

const ArticlePage = () => {
  return (
    <div className="article">
      <div className="article-header">
        <div className="article-header-title">
          Apa itu Size-Inclusive Clothes?
        </div>
        <img
          src={require("../../resources/images/article-alt.jpeg")}
          alt="image"
        />
        <div className="article-category">Tips Pemula</div>
      </div>
      <div className="article-content">
        <div className="article-title">Apa itu Size-Inclusive Clothes?</div>
        <div className="article-description">
          Istilah "plus-size" dan "size-inclusive" sering digunakan secara
          bergantian. Dan sementara keduanya bisa merujuk pada pakaian yang
          melampaui ukuran 16, untuk wanita yang menjadi sasaran kata kunci ini,
          perbedaan antara kedua istilah itu penting. "Ukuran plus"
          didefinisikan sebagai ukuran apa pun di atas 16. Ini memisahkan 67%
          wanita di A.S. yang memakai ukuran 16 atau lebih dari 33% yang tidak.
          Meskipun minoritas, rentang ukuran kelompok terakhir, disebut sebagai
          ukuran "lurus", dianggap sebagai standar. Dalam memisahkan keduanya —
          menjadikan yang satu sebagai norma dan yang lainnya sebagai
          pengecualian — wanita berukuran plus secara otomatis “dibedakan”,
          menurut Alexandra Waldman, salah satu pendiri dan direktur kreatif
          Universal Standard, merek pakaian yang mengusung ukuran 00 hingga 40
          .“Dan begitu Anda menjadi yang lain, Anda menjadi lebih rendah,”
          katanya kepada Refinery29.
          <br />
          Di bawah ukuran plus, pembeli ukuran plus sering kali dipindahkan ke
          bagian belakang toko atau toko lain seluruhnya. Dalam banyak kasus,
          penawaran ukuran plus sama sekali tidak tersedia di toko, melainkan
          hanya dijual secara online. Ini mempengaruhi gaya yang ditawarkan
          juga. “Bahkan merek yang melihat bahwa wanita berukuran besar
          memerlukan lebih banyak pilihan dan lebih banyak kemungkinan untuk
          mengekspresikan diri, masih akan memisahkan kelompok tersebut,” kata
          Waldman. “Mereka masih akan berkata, 'Oke, kami mendengarmu, kami
          mengerti, tapi kami hanya akan membuat tiga gaun, masing-masing hanya
          akan naik ke ukuran tertentu dan tidak ada hubungannya dengan apa yang
          biasanya kami [ jual] dan alasan pertama mengapa Anda mengagumi merek
          kami.'”
        </div>
      </div>
      <div className="article-container">
        <div className="article-related">
          <div className="article-related-image">
            <img
              src={require("../../resources/images/article-related-alt.png")}
              alt="image"
            />
          </div>
          <div className="article-related-detail">
            <img src="" alt="avatar" />
            <div className="article-related-author">Diana Silver</div>
            <img src="" alt="add to bookmark" />
          </div>
        </div>
        <div className="article-related"></div>
        <div className="article-related-list">
          <div className="related-list-container">
            <div className="related-list-category">Tips Pemula</div>
            <div className="related-list-title">
              Apa Itu Size-Inclusive Clothes?
            </div>
          </div>
          <div className="related-list-container">
            <div className="related-list-category">Eco Fashion Tips</div>
            <div className="related-list-title">
              Langkah Awal Ethical fashion untuk Pemula
            </div>
          </div>
          <div className="related-list-container">
            <div className="related-list-category">Tips Pemula</div>
            <div className="related-list-title">
              Apa Itu Size-Inclusive Clothes?
            </div>
          </div>
          <div className="related-list-container">
            <div className="related-list-category">Eco Fashion Tips</div>
            <div className="related-list-title">
              Langkah Awal Ethical fashion untuk Pemula
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
