# Hydro Heat Tech (HHT) - Rəsmi Vebsayt

**Hydro Heat Tech (HHT)** — Azərbaycan Respublikasında sənaye və kommersiya obyektləri üçün nasos, istilik, su təchizatı və yanğın sistemləri sahəsində kompleks mühəndislik xidmətləri göstərən ixtisaslaşmış şirkətdir.

Bu layihə şirkətin rəsmi vebsaytının müasir texnologiyalarla yığılmış Front-end hissəsidir.

## 🚀 Texnoloji Yığın (Tech Stack)

Layihə yüksək performans və istifadəçi təcrübəsi (UX) üçün aşağıdakı texnologiyalarla qurulub:

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Routing:** [React Router DOM](https://reactrouter.com/)

## ✨ Əsas Özəlliklər

- **Dinamik Header:** Səhifə sürüşdürüldükdə (scroll) daralan, rəngi dəyişən və "Glassmorphism" effekti ilə bulanıqlaşan premium naviqasiya paneli.
- **Dinamik Routing:** Bütün xidmətlər (`servicesData`) vahid bir şablon səhifə üzərindən dinamik olaraq render edilir.
- **Animasiyalı Hero Section:** 3D "reveal" effekti ilə açılan romb formalı şəkil klasterləri.
- **Sonsuz Marquee:** Şirkətin üstünlüklərini göstərən sonsuz sürüşən lent animasiyası.
- **Responsiv Dizayn:** Mobil (iPhone/Android), Tablet (iPad Pro) və Masaüstü ekranlar üçün tam optimallaşdırılmış interfeys.
- **SEO & Accessibility:** Lighthouse tərəfindən təsdiqlənmiş əlçatanlıq (aria-labels), meta-təsvirlər və düzgün başlıq iyerarxiyası.
- **WhatsApp İnteqrasiyası:** Backend tələb olunmadan birbaşa müştəri müraciətləri üçün effektiv CTA düymələri.

## 📁 Qovluq Strukturu

```text
src/
 ├── assets/          # Şəkillər, ikonlar və loqolar
 ├── components/      # Təkrar istifadə edilə bilən UI komponentləri (Header, Footer, Stats və s.)
 ├── data/            # Dinamik kontent (Xidmətlər siyahısı, rəylər, brendlər)
 ├── pages/           # Əsas səhifələr (Home, About, Contact, FAQ, ServiceDetail)
 ├── App.tsx          # Router və əsas struktur
 └── main.tsx         # Giriş nöqtəsi