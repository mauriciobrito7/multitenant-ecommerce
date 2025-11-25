export function Footer() {
  return (
    <footer className="flex border-t justify-between font-medium p-6">
      <section className="flex items-center gap-2">
        <p>© {new Date().getFullYear()} Funroad. All rights reserved.</p>
      </section>
    </footer>
  );
}
