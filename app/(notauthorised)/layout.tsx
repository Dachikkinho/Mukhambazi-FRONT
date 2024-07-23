import styles from './notAuthorised.module.css'
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className={styles.background}>
          {children}
      </div>
    );
  }