interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "gold";
}

export default function Badge({ children, variant = "primary" }: BadgeProps) {
  const styles = {
    primary: "bg-rose-500 text-white",
    gold: "bg-gradient-to-r from-gold-400 to-gold-600 text-white",
  };

  return (
    <span
      className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
