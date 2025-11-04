"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Gabriel Adikwu &amp; Co. All Rights Reserved.</p>
        <p className="built-by">
          Built by <a href="https://api.whatsapp.com/send/?phone=2348038509708&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><span>Jesse</span></a>
        </p>
      </div>
    </footer>
  );
}
