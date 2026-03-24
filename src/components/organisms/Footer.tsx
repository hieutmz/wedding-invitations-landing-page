"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { FOOTER } from "@/constants";
import { useTranslation } from "@/lib/LocaleContext";

function TikTokIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </SvgIcon>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const productLinks = [
    { label: t("footer.templates"), href: "#templates" },
    { label: t("footer.pricing"), href: "#pricing" },
    { label: t("footer.features"), href: "#why-choose" },
  ];

  const supportLinks = [
    { label: t("footer.guide"), href: "#how-it-works" },
    { label: t("footer.contact"), href: "#contact" },
    { label: t("footer.faq"), href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="py-12 md:py-16">
        <Container maxWidth="lg">
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:grid md:grid-cols-12 gap-10 md:gap-8">
            <div className="md:col-span-5 max-w-sm md:max-w-none">
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-500/20">
                  <FavoriteIcon sx={{ color: "#fff", fontSize: 18 }} />
                </div>
                <Typography variant="h6" className="font-heading font-bold text-lg">{FOOTER.brand}</Typography>
              </div>
              <Typography variant="body2" className="text-gray-400 mb-6 leading-relaxed">{t("footer.desc")}</Typography>
              <div className="flex gap-1 justify-center md:justify-start">
                {[
                  { icon: <FacebookIcon fontSize="small" />, label: "Facebook" },
                  { icon: <InstagramIcon fontSize="small" />, label: "Instagram" },
                  { icon: <YouTubeIcon fontSize="small" />, label: "YouTube" },
                  { icon: <TikTokIcon fontSize="small" />, label: "TikTok" },
                ].map(({ icon, label }) => (
                  <IconButton key={label} aria-label={label} size="medium" sx={{ color: "#9CA3AF", border: "1px solid rgba(156, 163, 175, 0.2)", "&:hover": { color: "#E8636F", borderColor: "rgba(232, 99, 111, 0.3)", backgroundColor: "rgba(232, 99, 111, 0.08)" }, transition: "all 0.2s ease" }}>
                    {icon}
                  </IconButton>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 w-full max-w-xs sm:max-w-sm md:max-w-none md:col-span-4">
              <div>
                <Typography variant="overline" className="font-bold mb-4 block text-xs tracking-widest text-gray-300">{t("footer.product")}</Typography>
                <ul className="space-y-3">
                  {productLinks.map((link) => (
                    <li key={link.href + link.label}>
                      <button onClick={() => handleNavClick(link.href)} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 bg-transparent border-none cursor-pointer text-sm inline-block">{link.label}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Typography variant="overline" className="font-bold mb-4 block text-xs tracking-widest text-gray-300">{t("footer.support")}</Typography>
                <ul className="space-y-3">
                  {supportLinks.map((link) => (
                    <li key={link.href + link.label}>
                      <button onClick={() => handleNavClick(link.href)} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 bg-transparent border-none cursor-pointer text-sm inline-block">{link.label}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-3 w-full max-w-xs sm:max-w-sm md:max-w-none">
              <div className="bg-gray-800/60 rounded-2xl p-5 border border-gray-700/50">
                <Typography variant="overline" className="font-bold mb-2 block text-xs tracking-widest text-gray-300">{t("footer.follow")}</Typography>
                <Typography variant="body2" className="text-gray-400 mb-4 leading-relaxed">{t("footer.followDesc")}</Typography>
                <button onClick={() => handleNavClick("#contact")} className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-semibold border-none cursor-pointer hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg shadow-rose-500/20">
                  {t("footer.contactNow")}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />
      <div className="py-5">
        <Container maxWidth="lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <Typography variant="caption" className="text-gray-500">{FOOTER.copyright}</Typography>
            <Typography variant="caption" className="text-gray-600">
              {t("footer.madeWith")} <FavoriteIcon sx={{ fontSize: 12, color: "#E8636F", verticalAlign: "middle", mx: 0.3 }} /> {t("footer.inVietnam")}
            </Typography>
          </div>
        </Container>
      </div>
    </footer>
  );
}
