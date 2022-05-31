import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Site.Unseen.module.css'

export default function Privacy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Support: Site Unseen</title>
        <meta name="description" content="Site Unseen Usage and Support" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Support 
        </h1>

        <h2>Keyboard Commands</h2>
            <table id={styles.commands}>
                <tbody>
                    <tr>
                        <th id={styles.shortcutKeysHeading}>Command</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>Tab</kbd> and <kbd>Shif+Tab</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Move back and forth between the interactive elements
                            on the page (i.e. links, form fields), just like you
                            normally do in a web browser.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>&larr;</kbd> and <kbd>&rarr;</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Move back and forth between accessible element. Both
                            interactive and non-interactive elements can be
                            accessible, and most elements containing viewable
                            content <em>should</em> be accessible, but this may
                            or may not be the case for all web pages.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>&uarr;</kbd> and <kbd>&darr;</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Move between options in a list of radio buttons,
                            checkboxes, or menu items.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>Space</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Select the current option from a list of radio buttons,
                            checkboxes, or menu items.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}><kbd>Enter</kbd></td>
                        <td className={styles.shortcutDescription}>
                            Activate the interactive element you are currently
                            focused on -- i.e. follow a link, press a button,
                            check or uncheck a box, etc.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>*</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Display the web page content visually for a few seconds.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>?</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Display a listing of keyboard commands and what they do.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>b</kbd> and <kbd>B</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Cycle back and forth through the buttons on the
                            page.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>f</kbd> and <kbd>F</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Cycle back and forth through the form fields on the
                            page.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>h</kbd> and <kbd>H</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Cycle back and forth through the headings on the
                            page.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>i</kbd> and <kbd>I</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Cycle back and forth through the images on the page.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>k</kbd> and <kbd>K</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Cycle back and forth through the links on the page.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>l</kbd> and <kbd>L</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Cycle back and forth through the ordered, unordered,
                            and definition lists on the page.
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.shortcutKeys}>
                            <kbd>r</kbd> and <kbd>R</kbd>
                        </td>
                        <td className={styles.shortcutDescription}>
                            Move back and forth to the regions/landmarks on the
                            page (i.e. heading, main, footer, etc.).
                        </td>
                    </tr>
                </tbody>
            </table>

      </main>
    </div>
  )
}
