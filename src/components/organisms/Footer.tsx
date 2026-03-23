"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import { FOOTER } from "@/constants";

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FavoriteIcon sx={{ color: "#E8636F" }} />
              <Typography variant="h6" className="font-heading font-bold">
                {FOOTER.brand}
              </Typography>
            </div>
            <Typography variant="body2" className="text-gray-400 mb-4">
              {FOOTER.description}
            </Typography>
            <div className="flex gap-2">
              <IconButton size="small" sx={{ color: "#9CA3AF", "&:hover": { color: "#E8636F" } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: "#9CA3AF", "&:hover": { color: "#E8636F" } }}>
                <InstagramIcon />
              </IconButton>
            </div>
          </div>

          {/* Product links */}
          <div>
            <Typography variant="subtitle1" className="font-bold mb-4">
              Sản phẩm
            </Typography>
            <ul className="space-y-2">
              {FOOTER.links.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-rose-400 transition-colors bg-transparent border-none cursor-pointer text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <Typography variant="subtitle1" className="font-bold mb-4">
              Hỗ trợ
            </Typography>
            <ul className="space-y-2">
              {FOOTER.links.support.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-rose-400 transition-colors bg-transparent border-none cursor-pointer text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <Typography variant="subtitle1" className="font-bold mb-4">
              Theo dõi chúng tôi
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              Nhận thông tin mẫu thiệp mới và ưu đãi đặc biệt.
            </Typography>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <Typography variant="body2" className="text-gray-500">
            {FOOTER.copyright}
          </Typography>
        </div>
      </Container>
    </footer>
  );
}
