import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "@/components/top-bar";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Tuner440 Privacy Policy | HyperSoSo",
  description:
    "Learn how Tuner440, a tuner app by HyperSoSo, handles microphone access, on-device settings, and your privacy.",
};

const navigation = [
  ["overview", "Overview"],
  ["information-we-collect", "Information we collect"],
  ["microphone", "Microphone and audio"],
  ["device-data", "Data stored on your device"],
  ["third-parties", "Third parties"],
  ["retention", "Retention and security"],
  ["children", "Children’s privacy"],
  ["changes", "Changes to this policy"],
  ["contact", "Contact us"],
] as const;

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page} lang="en">
      <TopBar product="Tuner440" section="Privacy" />

      <article id="top" className={styles.article}>
        <header className={styles.hero}>
          <p className={styles.kicker}>TUNER440 · PRIVACY</p>
          <h1>Privacy policy</h1>
          <div className={styles.updated}>
            <span>A tuner app by HyperSoSo</span>
            <span>Effective September 8, 2026</span>
          </div>
        </header>

        <div className={styles.document}>
          <aside className={styles.sidebar} aria-label="On this page">
            <p>On this page</p>
            <nav>
              {navigation.map(([id, label]) => (
                <a href={`#${id}`} key={id}>{label}</a>
              ))}
            </nav>
          </aside>

          <div className={styles.content}>
            <section id="overview">
              <h2>Overview</h2>
              <p className={styles.lead}>
                Tuner440 is designed to tune your instrument without collecting
                your personal information. Audio analysis happens entirely on
                your device, and your audio is never recorded, stored, or sent
                to us.
              </p>
              <div className={styles.callout}>
                <p>Our privacy approach is simple:</p>
                <ul>
                  <li>We do not require an account.</li>
                  <li>We do not collect personal information.</li>
                  <li>We do not store or transmit microphone audio.</li>
                </ul>
              </div>
            </section>

            <section id="information-we-collect">
              <h2>Information we collect</h2>
              <p>
                Tuner440 does not collect names, email addresses, location data,
                device identifiers, usage history, or other personal
                information. The app does not include account registration or
                sign-in features.
              </p>
            </section>

            <section id="microphone">
              <h2>Microphone and audio</h2>
              <p>
                Tuner440 requests microphone access so it can identify the pitch
                of a note while you use the tuner. Microphone input is processed
                in real time on your device only.
              </p>
              <ul>
                <li>Your audio is not saved as a recording.</li>
                <li>Your audio and pitch results are not sent to our servers.</li>
                <li>Your audio is not shared with third parties.</li>
              </ul>
              <p>
                You can revoke microphone permission at any time in your
                device’s settings. The tuning feature will not work without
                microphone access.
              </p>
            </section>

            <section id="device-data">
              <h2>Data stored on your device</h2>
              <p>
                Preferences such as reference pitch, tuning mode, metronome
                sound, and display settings may be stored locally on your device
                for convenience. We cannot access or collect these preferences.
                You can remove them by clearing the app’s storage or uninstalling
                the app.
              </p>
            </section>

            <section id="third-parties">
              <h2>Third parties</h2>
              <p>
                We do not sell, share, or disclose personal information to third
                parties because Tuner440 does not collect it. The app does not use
                advertising, analytics, cross-app tracking, or third-party crash
                reporting services.
              </p>
            </section>

            <section id="retention">
              <h2>Retention and security</h2>
              <p>
                We do not maintain a database of Tuner440 users or retain user
                audio. Because no personal information is collected by us, there
                is no personal information for us to retain or delete. Settings
                stored locally remain under your control and can be removed as
                described above.
              </p>
            </section>

            <section id="children">
              <h2>Children’s privacy</h2>
              <p>
                Tuner440 does not knowingly collect personal information from
                children—or from users of any age.
              </p>
            </section>

            <section id="changes">
              <h2>Changes to this policy</h2>
              <p>
                We may update this Privacy Policy if Tuner440’s features or data
                practices change. We will post the revised policy on this page
                and update the effective date above.
              </p>
            </section>

            <section id="contact">
              <h2>Contact us</h2>
              <p>
                If you have questions about this Privacy Policy or Tuner440’s
                privacy practices, contact HyperSoSo at{" "}
                <a href="mailto:cs@hypersoso.com">cs@hypersoso.com</a>.
              </p>
            </section>
          </div>
        </div>

        <footer className={styles.footer}>
          <Link href="/">© 2026 HyperSoSo</Link>
          <a href="#top">Back to top ↑</a>
        </footer>
      </article>
    </main>
  );
}
