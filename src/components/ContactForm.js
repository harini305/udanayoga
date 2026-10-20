'use client';

import { useRef, useState } from 'react';
import { business, programmeOptions } from '@/data/site';
import styles from './ContactForm.module.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{6,20}$/;

function validate(v) {
  const e = {};
  if (v.name.trim().length > 0 && v.name.trim().length < 2) e.name = 'Please enter at least 2 characters.';
  if (v.phone.trim() && !PHONE_RE.test(v.phone.trim())) e.phone = 'Use digits, spaces, + or - only (6–20 characters).';
  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address, e.g. name@example.com.';
  if (!v.program) e.program = 'Please choose a programme.';
  if (!v.subject.trim()) e.subject = 'Please add a subject.';
  if (v.message.length > 2000) e.message = 'Please keep your message under 2,000 characters.';
  return e;
}

const empty = { name: '', phone: '', email: '', program: '', subject: '', message: '' };

/**
 * Frontend-only enquiry form (fields from the original contact page).
 * Nothing is submitted anywhere: on success it shows a clearly labelled demo
 * confirmation and offers to open the visitor's own email app instead.
 */
export default function ContactForm({ defaultProgram = '' }) {
  const [values, setValues] = useState({ ...empty, program: defaultProgram });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [done, setDone] = useState(false);
  const summaryRef = useRef(null);
  const doneRef = useRef(null);
  const formRef = useRef(null);

  const set = (k) => (e) => {
    const next = { ...values, [k]: e.target.value };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, phone: true, email: true, program: true, subject: true, message: true });
    const first = Object.keys(errs)[0];
    if (first) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setDone(true);
    requestAnimationFrame(() => doneRef.current?.focus());
  };

  const reset = () => {
    setValues({ ...empty, program: defaultProgram });
    setErrors({});
    setTouched({});
    setDone(false);
    requestAnimationFrame(() => formRef.current?.querySelector('input')?.focus());
  };

  const mailto = () => {
    const body = [
      values.name && `Name: ${values.name}`,
      values.phone && `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Programme: ${values.program}`,
      '',
      values.message,
    ]
      .filter((l) => l !== false && l !== undefined)
      .join('\n');
    return `mailto:${business.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
  };

  if (done) {
    return (
      <div className={styles.done} ref={doneRef} tabIndex={-1} role="status" aria-live="polite">
        <p className={styles.demoTag}>Demo only — not sent</p>
        <h3>Your details passed validation</h3>
        <p>
          This preview website is not connected to Udana Yoga’s inbox, so <strong>your message has not been sent</strong> and
          no booking has been made.
        </p>
        <p>To contact the academy now, you can open the same message in your own email app:</p>
        <div className="btn-row">
          <a className="btn" href={mailto()}>
            Open in my email app
          </a>
          <button type="button" className="btn btn--ghost" onClick={reset}>
            Start a new message
          </button>
        </div>
      </div>
    );
  }

  const errorList = Object.entries(errors).filter(([k]) => touched[k]);
  const field = (k) => ({
    id: `f-${k}`,
    name: k,
    value: values[k],
    onChange: set(k),
    onBlur: blur(k),
    'aria-invalid': touched[k] && errors[k] ? true : undefined,
    'aria-describedby': touched[k] && errors[k] ? `e-${k}` : undefined,
  });
  const err = (k) =>
    touched[k] && errors[k] ? (
      <p id={`e-${k}`} className={styles.error}>
        <span aria-hidden="true">!</span> {errors[k]}
      </p>
    ) : null;

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate aria-describedby="form-demo-note">
      <p id="form-demo-note" className={styles.demoNote}>
        <strong>Preview build:</strong> this form checks your details but does not send them to Udana Yoga.
      </p>

      {errorList.length > 0 && (
        <div className={styles.summary} ref={summaryRef} tabIndex={-1} role="alert">
          <p>Please check {errorList.length === 1 ? 'one field' : `${errorList.length} fields`}:</p>
          <ul>
            {errorList.map(([k, msg]) => (
              <li key={k}>
                <a href={`#f-${k}`}>{msg}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="f-name">Name</label>
          <input type="text" autoComplete="name" {...field('name')} />
          {err('name')}
        </div>
        <div className={styles.field}>
          <label htmlFor="f-phone">
            Phone <span className={styles.optional}>(optional)</span>
          </label>
          <input type="tel" autoComplete="tel" inputMode="tel" {...field('phone')} />
          {err('phone')}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="f-email">
          Email <span className={styles.req}>(required)</span>
        </label>
        <input type="email" autoComplete="email" required {...field('email')} />
        {err('email')}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="f-program">
            Programme <span className={styles.req}>(required)</span>
          </label>
          <select required {...field('program')}>
            <option value="">Choose a programme</option>
            {programmeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {err('program')}
        </div>
        <div className={styles.field}>
          <label htmlFor="f-subject">
            Subject <span className={styles.req}>(required)</span>
          </label>
          <input type="text" required {...field('subject')} />
          {err('subject')}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="f-message">Message</label>
        <textarea rows={5} {...field('message')} />
        {err('message')}
      </div>

      <button type="submit" className="btn">
        Check & preview message
      </button>
    </form>
  );
}
