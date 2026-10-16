import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Check,
  X,
  ArrowUpRight,
  CalendarDays,
  Star,
} from 'lucide-react';
import { waLink } from './lib/whatsapp';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { CanalLine } from './components/CanalLine';
import { Logo } from './components/Logo';
import { ImageWithFallback } from './components/ImageWithFallback';

const HERO_WORDS = [
  'El',
  'dolor',
  'de',
  'muela',
  'es',
  'complejo.',
  'La',
  'solución,',
  'simple.',
];

const REVIEWS = [
  {
    author: 'rosangelica diaz',
    text: 'Excelente atención. El Dr. Chica es muy profesional, dedicado y transmite confianza desde el primer momento. Me sentí cómodo(a) durante todo el proceso y el resultado fue impecable.',
  },
  {
    author: 'Bárbara Oettinger Searle',
    text: 'Me atendió la doctora Nataly Quiroga y no tengo más que palabras de agradecimiento. Es súper amorosa, buena onda y te hace sentir cómoda desde el primer minuto.',
  },
  {
    author: 'Jonathan Canales',
    text: 'Súper buena atención, súper ordenados desde lo administrativo hasta lo médico. Precios razonables y de acuerdo a la calidad del servicio.',
  },
  {
    author: 'Alejandra Echeverría',
    text: 'Un tratamiento de endodoncia a un premolar a un precio conveniente y casi sin dolor. Cuando tuve dudas me atendieron muy rápido las asistentes que manejan el WhatsApp.',
  },
];

export default function App() {
  // Form State
  const [nombre, setNombre] = useState('');
  const [motivo, setMotivo] = useState('');
  const [pieza, setPieza] = useState('');
  const [seguro, setSeguro] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [formError, setFormError] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim()) {
      setFormError('Por favor ingresa tu nombre');
      return;
    }
    if (!motivo) {
      setFormError('Por favor selecciona qué necesitas');
      return;
    }
    setFormError('');

    let text = `Hola, soy ${nombre.trim()}. Les escribo desde la web de Odontología Amapolas.\nNecesito: ${motivo}`;
    if (pieza) {
      text += `\nPieza: ${pieza}`;
    }
    if (seguro) {
      text += `\nSeguro dental: ${seguro}`;
    }
    if (mensaje.trim()) {
      text += `\nMensaje: ${mensaje.trim()}`;
    }

    const url = waLink(text);
    const win = window.open(url, '_blank');
    if (!win) {
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-surface text-ink pb-20 md:pb-0 font-sans selection:bg-secondary selection:text-ink">
      {/* 0. Top Bar Notification (non-sticky) */}
      <div className="bg-secondary text-ink text-[14px] font-semibold h-9 flex items-center justify-center px-4 text-center">
        <span>
          Urgencia dental 24/7 ·{' '}
          <a
            href="tel:+56984727012"
            className="underline hover:opacity-85 font-bold"
          >
            +56 9 8472 7012
          </a>{' '}
          · Providencia
        </span>
      </div>

      {/* Header (sticky) */}
      <header className="sticky top-0 z-40 bg-primary h-16 md:h-20 shadow-md">
        <div className="max-w-[1160px] mx-auto h-full px-5 flex items-center justify-between">
          {/* Logo on Primary */}
          <a href="#inicio" className="flex items-center">
            <Logo className="h-8 md:h-10" />
          </a>

          {/* Desktop Navigation & Actions */}
          <div className="hidden lg:flex items-center gap-7">
            <nav className="flex items-center gap-6 text-[15px] text-surface font-medium">
              <a
                href="#endodoncia"
                className="hover:border-b-2 hover:border-secondary transition-all py-1"
              >
                Endodoncia
              </a>
              <a
                href="#respaldo"
                className="hover:border-b-2 hover:border-secondary transition-all py-1"
              >
                Por qué nosotros
              </a>
              <a
                href="#resenas"
                className="hover:border-b-2 hover:border-secondary transition-all py-1"
              >
                Reseñas
              </a>
              <a
                href="#contacto"
                className="hover:border-b-2 hover:border-secondary transition-all py-1"
              >
                Contacto
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://t.dentalsoft.cl/reserva_online/src/public/index.php?clinica=YmQxMF9yZWxheGRlbnQy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-ink font-bold text-sm rounded-full min-h-[44px] px-5 flex items-center justify-center hover:opacity-90 active:scale-[0.98] transition-all"
              >
                Agendar en línea
              </a>
              <a
                href="tel:+56984727012"
                className="bg-alert text-surface font-bold text-[18px] rounded-full min-h-[44px] px-6 flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
              >
                <Phone className="w-5 h-5 text-surface" />
                <span>Llamar</span>
              </a>
            </div>
          </div>

          {/* Mobile Right Call Button (Circular 44px) */}
          <div className="lg:hidden flex items-center">
            <a
              href="tel:+56984727012"
              aria-label="Llamar a Odontología Amapolas"
              className="w-11 h-11 rounded-full bg-alert flex items-center justify-center shadow-md active:scale-95 transition-transform"
            >
              <Phone className="w-5 h-5 text-surface" />
            </a>
          </div>
        </div>
      </header>

      {/* SECCIÓN 1: HERO */}
      <section
        id="inicio"
        className="bg-primary text-surface min-h-[88vh] pt-4 md:pt-10 pb-8 md:pb-16 flex items-center"
      >
        <div className="max-w-[1160px] mx-auto px-5 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left Content Column (7/12 on desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Kicker with CanalLine */}
              <div className="flex items-center gap-3 mb-2 md:mb-4">
                <CanalLine height={36} />
                <span className="text-surface/80 uppercase tracking-widest text-[13px] font-bold">
                  Endodoncia y urgencias · Providencia
                </span>
              </div>

              {/* Animated H1 Title */}
              <h1 className="font-display font-extrabold text-[40px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tight mb-4">
                {HERO_WORDS.map((word, index) => {
                  const isSimple = word.includes('simple.');
                  return (
                    <span
                      key={index}
                      className="inline-block animate-word-in mr-2"
                      style={{ animationDelay: `${index * 70}ms` }}
                    >
                      {isSimple ? (
                        <span className="relative inline-block">
                          simple.
                          <span className="block h-[6px] bg-secondary rounded-full mt-1 w-full" />
                        </span>
                      ) : (
                        word
                      )}
                    </span>
                  );
                })}
              </h1>

              {/* Bajada */}
              <p
                className="text-[16px] md:text-[18px] text-surface/85 leading-relaxed mb-6 max-w-xl animate-fade-up"
                style={{ animationDelay: '700ms' }}
              >
                Especialistas en endodoncia o tratamiento de conductos. Primera
                consulta y diagnóstico sin costo.
              </p>

              {/* Mobile: Urgency Card directly in document flow before photo to fit 390x844 */}
              <div
                className="block lg:hidden bg-surface text-ink rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg p-5 shadow-2xl mb-6 animate-fade-up"
                style={{ animationDelay: '750ms' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-alert inline-block" />
                  <span className="font-display font-bold text-sm tracking-wide uppercase">
                    Urgencia 24/7
                  </span>
                </div>

                <a
                  href="tel:+56984727012"
                  className="font-display font-extrabold text-[26px] text-primary block mb-4 hover:opacity-85"
                >
                  +56 9 8472 7012
                </a>

                <div className="space-y-2.5">
                  <a
                    href={waLink(
                      'Hola, tengo una urgencia dental y necesito atención. Les escribo desde la web de Odontología Amapolas.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary text-surface font-bold rounded-full min-h-[52px] px-4 flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all text-[16px]"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-surface" />
                    <span>Escribir por WhatsApp</span>
                  </a>

                  <a
                    href="tel:+56984727012"
                    className="w-full bg-alert text-surface font-bold text-[18px] rounded-full min-h-[52px] px-4 flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
                  >
                    <Phone className="w-5 h-5 text-surface" />
                    <span>Llamar ahora</span>
                  </a>
                </div>

                <div className="mt-3 text-center">
                  <a
                    href="https://t.dentalsoft.cl/reserva_online/src/public/index.php?clinica=YmQxMF9yZWxheGRlbnQy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-semibold underline hover:opacity-80 inline-block"
                  >
                    o agenda tu evaluación en línea
                  </a>
                </div>
              </div>
            </div>

            {/* Right Photo Column (5/12 on desktop) */}
            <div className="lg:col-span-5 relative">
              {/* Mobile Photo (Aspect 16/10) */}
              <div className="block lg:hidden">
                <ImageWithFallback
                  src="https://odontologiaamapolas.cl/wp-content/uploads/2026/02/foto-odontologia-3-1.png.webp"
                  alt="Clínica Odontología Amapolas en Providencia"
                  fetchPriority="high"
                  width={800}
                  height={500}
                  containerClassName="w-full aspect-[16/10] rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg shadow-xl"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Desktop Photo with Overlapping Urgency Card */}
              <div className="hidden lg:block relative pb-10">
                <ImageWithFallback
                  src="https://odontologiaamapolas.cl/wp-content/uploads/2026/02/foto-odontologia-3-1.png.webp"
                  alt="Clínica Odontología Amapolas en Providencia"
                  fetchPriority="high"
                  width={800}
                  height={1000}
                  containerClassName="w-full aspect-[4/5] rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg shadow-2xl"
                  className="w-full h-full object-cover"
                />

                {/* Overlapping Card protruding 48px to the left */}
                <div
                  className="absolute -left-12 -bottom-4 w-[360px] bg-surface text-ink rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg p-6 shadow-2xl z-20 animate-fade-up"
                  style={{ animationDelay: '800ms' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-alert inline-block" />
                    <span className="font-display font-bold text-sm tracking-wide uppercase">
                      Urgencia 24/7
                    </span>
                  </div>

                  <a
                    href="tel:+56984727012"
                    className="font-display font-extrabold text-[28px] text-primary block mb-5 hover:opacity-85"
                  >
                    +56 9 8472 7012
                  </a>

                  <div className="space-y-3">
                    <a
                      href={waLink(
                        'Hola, tengo una urgencia dental y necesito atención. Les escribo desde la web de Odontología Amapolas.'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary text-surface font-bold rounded-full min-h-[52px] px-4 flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all text-[16px]"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-surface" />
                      <span>Escribir por WhatsApp</span>
                    </a>

                    <a
                      href="tel:+56984727012"
                      className="w-full bg-alert text-surface font-bold text-[18px] rounded-full min-h-[52px] px-4 flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
                    >
                      <Phone className="w-5 h-5 text-surface" />
                      <span>Llamar ahora</span>
                    </a>
                  </div>

                  <div className="mt-4 text-center">
                    <a
                      href="https://t.dentalsoft.cl/reserva_online/src/public/index.php?clinica=YmQxMF9yZWxheGRlbnQy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-semibold underline hover:opacity-80 inline-block"
                    >
                      o agenda tu evaluación en línea
                    </a>
                  </div>

                  {/* CanalLine descending from the card */}
                  <div className="absolute left-8 -bottom-10 pointer-events-none">
                    <CanalLine height={44} animate={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: ENDODONCIA */}
      <section
        id="endodoncia"
        className="bg-surface text-ink py-20 lg:py-32 scroll-mt-20"
      >
        <div className="max-w-[1160px] mx-auto px-5">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CanalLine height={40} />
              <span className="text-primary uppercase tracking-widest text-[13px] font-bold">
                Tratamiento de conductos
              </span>
            </div>
            <h2 className="font-display font-bold text-[30px] lg:text-[48px] leading-tight mb-5">
              Eliminamos la infección y conservamos tu diente.
            </h2>
            <p className="text-[17px] leading-[1.6] text-ink/80">
              La endodoncia trata el interior del diente cuando la pulpa se
              inflama o se infecta por caries profundas, golpes o filtraciones.
              Alivia el dolor y evita perder la pieza. Se hace en una o varias
              sesiones, según tu caso, siempre con un endodoncista.
            </p>
          </div>

          {/* Central Illustration */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-[720px] bg-secondary/30 rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg p-2 md:p-6 shadow-sm">
              <ImageWithFallback
                src="https://odontologiaamapolas.cl/wp-content/uploads/2026/02/Tratamiento-conducto.webp"
                alt="Ilustración paso a paso de un tratamiento de conductos o endodoncia"
                loading="lazy"
                width={720}
                height={400}
                containerClassName="w-full rounded-2xl"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </div>

          {/* Types List (3 Rows) */}
          <div className="mb-10 divide-y divide-mist border-t border-b border-mist">
            {/* Row 1 */}
            <a
              href={waLink(
                'Hola, quiero agendar una evaluación de endodoncia de diente incisivo o canino.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="py-6 px-2 flex items-center justify-between group hover:bg-mist/40 transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="font-display font-extrabold text-3xl md:text-4xl text-primary/25">
                  01
                </span>
                <span className="font-display font-bold text-xl md:text-2xl text-ink">
                  Diente incisivo o canino
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-bold text-primary group-hover:underline">
                <span>Consultar</span>
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </span>
            </a>

            {/* Row 2 */}
            <a
              href={waLink(
                'Hola, quiero agendar una evaluación de endodoncia de premolar.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="py-6 px-2 flex items-center justify-between group hover:bg-mist/40 transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="font-display font-extrabold text-3xl md:text-4xl text-primary/25">
                  02
                </span>
                <span className="font-display font-bold text-xl md:text-2xl text-ink">
                  Premolar
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-bold text-primary group-hover:underline">
                <span>Consultar</span>
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </span>
            </a>

            {/* Row 3 */}
            <a
              href={waLink(
                'Hola, quiero agendar una evaluación de endodoncia de muela.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="py-6 px-2 flex items-center justify-between group hover:bg-mist/40 transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="font-display font-extrabold text-3xl md:text-4xl text-primary/25">
                  03
                </span>
                <span className="font-display font-bold text-xl md:text-2xl text-ink">
                  Muela (molar)
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-bold text-primary group-hover:underline">
                <span>Consultar</span>
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </span>
            </a>
          </div>

          {/* Highlight line */}
          <div className="bg-mist p-4 rounded-xl border-l-4 border-secondary mb-12 flex items-center">
            <p className="font-medium text-ink text-base md:text-lg">
              Endodoncia con descuento: pregunta el valor de tu caso por
              WhatsApp.
            </p>
          </div>

          {/* Included / Not Included Box */}
          <div className="bg-mist rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg p-6 md:p-10 mb-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Column 1: Incluye */}
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-ink mb-5 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block" />
                  Incluye
                </h3>
                <ul className="space-y-3.5">
                  {[
                    'Consulta de evaluación',
                    'Radiografías digitales',
                    'Medición de conductos',
                    'Limpieza mecanizada',
                    'Restauración provisoria (tapadura)',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-surface flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-[16px] text-ink/90 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: No incluye */}
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-ink/80 mb-5 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-ink/30 inline-block" />
                  No incluye
                </h3>
                <ul className="space-y-3.5">
                  {[
                    'Otras radiografías para endodoncia',
                    'Tratamiento de absceso',
                    'Restauración definitiva (tapadura)',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-surface flex items-center justify-center flex-shrink-0">
                        <X className="w-3.5 h-3.5 text-ink/60" />
                      </div>
                      <span className="text-[16px] text-ink/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center md:text-left">
            <a
              href={waLink('Hola, quiero agendar una evaluación de endodoncia.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-surface font-bold rounded-full min-h-[52px] px-8 text-base md:text-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
            >
              Agendar evaluación sin costo
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: POR QUÉ NOSOTROS (RESPALDO) */}
      <section
        id="respaldo"
        className="bg-primary text-surface py-20 lg:py-32 scroll-mt-20"
      >
        <div className="max-w-[1160px] mx-auto px-5">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CanalLine height={40} />
              <span className="text-surface/80 uppercase tracking-widest text-[13px] font-bold">
                Respaldo
              </span>
            </div>
            <h2 className="font-display font-bold text-[30px] lg:text-[48px] leading-tight mb-4">
              La seguridad de nuestros pacientes no tiene precio.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content (7/12) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Two Seals Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Sello 1: Seremi */}
                <div className="flex items-start gap-4">
                  <div className="w-[84px] h-[84px] rounded-full bg-surface p-2 flex items-center justify-center flex-shrink-0 shadow-md">
                    <ImageWithFallback
                      src="https://odontologiaamapolas.cl/wp-content/uploads/2026/02/SEREMISALUDMET-1024x951.png"
                      alt="Sello de certificación de la Seremi de Salud Metropolitana"
                      loading="lazy"
                      width={72}
                      height={72}
                      fallbackType="seal"
                      containerClassName="w-full h-full flex items-center justify-center bg-mist rounded-full"
                      className="max-h-16 max-w-16 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-surface mb-1">
                      Clínica certificada
                    </h3>
                    <p className="text-sm text-surface/85 leading-relaxed">
                      Clínica y pabellones quirúrgicos certificados por la
                      Seremi de Salud Metropolitana. Res. Exenta N° 15700, 21 de
                      julio de 2017.
                    </p>
                  </div>
                </div>

                {/* Sello 2: Superintendencia */}
                <div className="flex items-start gap-4">
                  <div className="w-[84px] h-[84px] rounded-full bg-surface p-2 flex items-center justify-center flex-shrink-0 shadow-md">
                    <ImageWithFallback
                      src="https://odontologiaamapolas.cl/wp-content/uploads/2026/02/super-intendencia-1.jpeg-1024x1024.webp"
                      alt="Sello de acreditación ante la Superintendencia de Salud"
                      loading="lazy"
                      width={72}
                      height={72}
                      fallbackType="seal"
                      containerClassName="w-full h-full flex items-center justify-center bg-mist rounded-full"
                      className="max-h-16 max-w-16 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-surface mb-1">
                      Doctores acreditados
                    </h3>
                    <p className="text-sm text-surface/85 leading-relaxed">
                      Cirujano dentistas acreditados en todas las
                      especialidades.
                    </p>
                  </div>
                </div>
              </div>

              {/* Two Big Static Numbers */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 py-6 border-y border-surface/20">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-extrabold text-[56px] leading-none text-surface">
                    +4.900
                  </span>
                  <span className="text-lg text-surface/80 font-medium">
                    pacientes
                  </span>
                </div>

                <div className="hidden sm:block w-px h-14 bg-secondary" />

                <div className="flex items-baseline gap-3">
                  <span className="font-display font-extrabold text-[56px] leading-none text-surface">
                    +12
                  </span>
                  <span className="text-lg text-surface/80 font-medium">
                    endodoncistas
                  </span>
                </div>
              </div>

              {/* Mobile Photo placement (after numbers) */}
              <div className="block lg:hidden">
                <ImageWithFallback
                  src="https://odontologiaamapolas.cl/wp-content/uploads/2026/02/Sin-titulo-27-e1721060715701.jpeg"
                  alt="Equipo clínico e instalaciones de Odontología Amapolas"
                  loading="lazy"
                  width={800}
                  height={500}
                  containerClassName="w-full aspect-[16/10] rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg shadow-xl"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {[
                  'Primera consulta y diagnóstico gratuitos.',
                  'Tratamientos garantizados hasta por 1 año.',
                  'Radiografías digitales y tecnología mecanizada de última generación.',
                  'Aceptamos tu seguro dental.',
                  'Financiamiento personalizado si no tienes seguro.',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-ink" />
                    </div>
                    <span className="text-[17px] text-surface font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA + Webpay logo */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={waLink(
                    'Hola, quiero consultar por mi seguro dental o por financiamiento para un tratamiento.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface text-primary font-bold text-base md:text-lg rounded-full min-h-[52px] px-8 inline-flex items-center justify-center hover:opacity-90 active:scale-[0.98] transition-all shadow-lg"
                >
                  Consultar por seguro o financiamiento
                </a>

                <div className="bg-surface rounded-full px-4 py-2 inline-flex items-center shadow-md">
                  <ImageWithFallback
                    src="https://odontologiaamapolas.cl/wp-content/uploads/2026/02/webpay.png.webp"
                    alt="Logo Webpay de Transbank"
                    loading="lazy"
                    width={80}
                    height={28}
                    fallbackType="seal"
                    containerClassName="h-7 w-auto"
                    className="h-7 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Photo Column (5/12 on desktop) */}
            <div className="hidden lg:block lg:col-span-5">
              <ImageWithFallback
                src="https://odontologiaamapolas.cl/wp-content/uploads/2026/02/Sin-titulo-27-e1721060715701.jpeg"
                alt="Equipo médico e infraestructura clínica Odontología Amapolas"
                loading="lazy"
                width={800}
                height={1000}
                containerClassName="w-full aspect-[4/5] rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg shadow-2xl"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: RESEÑAS */}
      <section
        id="resenas"
        className="bg-mist text-ink py-20 lg:py-32 scroll-mt-20 overflow-hidden"
      >
        <div className="max-w-[1160px] mx-auto px-5">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CanalLine height={40} />
              <span className="text-primary uppercase tracking-widest text-[13px] font-bold">
                Opiniones en Google
              </span>
            </div>
            <h2 className="font-display font-bold text-[30px] lg:text-[48px] leading-tight mb-2">
              95 reseñas en Google. Calificación: Excelente.
            </h2>
          </div>

          {/* Reviews Container: Horizontal scroll on mobile (< md), 2x2 grid on desktop (>= md) */}
          <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="w-[85vw] max-w-[340px] md:w-auto md:max-w-none flex-shrink-0 snap-center bg-surface rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="w-5 h-5 text-primary fill-primary"
                      />
                    ))}
                  </div>
                  <p className="text-[16px] leading-[1.6] text-ink/85 italic mb-6">
                    “{review.text}”
                  </p>
                </div>
                <div className="font-bold text-ink text-base">
                  {review.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CONTACTO */}
      <section
        id="contacto"
        className="bg-surface text-ink py-20 lg:py-32 scroll-mt-20"
      >
        <div className="max-w-[1160px] mx-auto px-5">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CanalLine height={40} />
              <span className="text-primary uppercase tracking-widest text-[13px] font-bold">
                Contacto
              </span>
            </div>
            <h2 className="font-display font-bold text-[30px] lg:text-[48px] leading-tight mb-2">
              Cuéntanos qué te pasa y te respondemos por WhatsApp.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Form Column (7/12) */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleFormSubmit}
                className="space-y-5 bg-surface"
              >
                {formError && (
                  <div className="p-4 bg-alert/10 border-l-4 border-alert rounded text-alert font-bold text-sm">
                    {formError}
                  </div>
                )}

                {/* Nombre */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-bold text-ink mb-1.5"
                  >
                    Nombre <span className="text-alert">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre completo"
                    className="w-full min-h-[52px] px-4 rounded-xl border-[1.5px] border-ink/20 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none text-base"
                  />
                </div>

                {/* ¿Qué necesitas? */}
                <div>
                  <label
                    htmlFor="motivo"
                    className="block text-sm font-bold text-ink mb-1.5"
                  >
                    ¿Qué necesitas? <span className="text-alert">*</span>
                  </label>
                  <select
                    id="motivo"
                    required
                    value={motivo}
                    onChange={(e) => setMotivo(e.target.value)}
                    className="w-full min-h-[52px] px-4 rounded-xl border-[1.5px] border-ink/20 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none text-base bg-surface"
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="Tengo dolor o una urgencia ahora">
                      Tengo dolor o una urgencia ahora
                    </option>
                    <option value="Evaluación de endodoncia">
                      Evaluación de endodoncia
                    </option>
                    <option value="Consulta por seguro dental o financiamiento">
                      Consulta por seguro dental o financiamiento
                    </option>
                  </select>
                </div>

                {/* Pieza afectada */}
                <div>
                  <label
                    htmlFor="pieza"
                    className="block text-sm font-bold text-ink mb-1.5"
                  >
                    Pieza afectada (opcional)
                  </label>
                  <select
                    id="pieza"
                    value={pieza}
                    onChange={(e) => setPieza(e.target.value)}
                    className="w-full min-h-[52px] px-4 rounded-xl border-[1.5px] border-ink/20 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none text-base bg-surface"
                  >
                    <option value="">Selecciona si lo sabes</option>
                    <option value="Incisivo o canino">Incisivo o canino</option>
                    <option value="Premolar">Premolar</option>
                    <option value="Muela">Muela</option>
                    <option value="No estoy seguro/a">No estoy seguro/a</option>
                  </select>
                </div>

                {/* ¿Tienes seguro dental? */}
                <div>
                  <label
                    htmlFor="seguro"
                    className="block text-sm font-bold text-ink mb-1.5"
                  >
                    ¿Tienes seguro dental? (opcional)
                  </label>
                  <select
                    id="seguro"
                    value={seguro}
                    onChange={(e) => setSeguro(e.target.value)}
                    className="w-full min-h-[52px] px-4 rounded-xl border-[1.5px] border-ink/20 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none text-base bg-surface"
                  >
                    <option value="">Selecciona</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                    <option value="No sé">No sé</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-bold text-ink mb-1.5"
                  >
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Cuéntanos brevemente tus síntomas o dudas..."
                    className="w-full p-4 rounded-xl border-[1.5px] border-ink/20 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none text-base resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-auto min-h-[52px] px-8 bg-primary text-surface font-bold text-base md:text-lg rounded-full flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-5 h-5 text-surface" />
                  <span>Enviar por WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Info Card & Map (5/12) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Data Card */}
              <div className="bg-mist rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg p-7 space-y-5 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center flex-shrink-0 text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-base">Atención</h3>
                    <p className="text-ink/80 text-[15px]">
                      Urgencia dental 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-base">Dirección</h3>
                    <p className="text-ink/80 text-[15px]">
                      Amapolas 1290, Of. 602, Providencia, Santiago · Metro
                      Cristóbal Colón
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-base">Teléfono</h3>
                    <a
                      href="tel:+56984727012"
                      className="text-primary font-bold text-[15px] hover:underline"
                    >
                      +56 9 8472 7012
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-base">Correo</h3>
                    <a
                      href="mailto:contacto@odontologiaamapolas.cl"
                      className="text-primary font-medium text-[15px] hover:underline break-all"
                    >
                      contacto@odontologiaamapolas.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-ink/10">
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center flex-shrink-0 text-primary">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-base">
                      Reserva directa
                    </h3>
                    <a
                      href="https://t.dentalsoft.cl/reserva_online/src/public/index.php?clinica=YmQxMF9yZWxheGRlbnQy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold text-[15px] underline hover:opacity-85 inline-flex items-center gap-1"
                    >
                      <span>Agendar evaluación en línea</span>
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div className="overflow-hidden rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg shadow-sm border border-mist">
                <iframe
                  loading="lazy"
                  title="Ubicación de Odontología Amapolas"
                  src="https://maps.google.com/maps?q=Amapolas%201290%2C%20Providencia%2C%20Santiago&t=m&z=15&output=embed"
                  className="w-full h-[240px] border-0 block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-surface py-14 px-5 pb-28 md:pb-14">
        <div className="max-w-[1160px] mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Logo & Brand Info (6/12) */}
            <div className="md:col-span-6 space-y-4">
              <Logo className="h-9 md:h-11" />
              <p className="text-surface/85 text-sm max-w-md leading-relaxed">
                Clínica dental en Providencia especializada en endodoncia,
                tratamiento de conductos y atención de urgencia dental 24/7.
              </p>
              <div className="bg-surface rounded-full px-3.5 py-1.5 inline-flex items-center shadow-sm">
                <ImageWithFallback
                  src="https://odontologiaamapolas.cl/wp-content/uploads/2026/02/webpay.png.webp"
                  alt="Webpay Transbank"
                  loading="lazy"
                  width={80}
                  height={28}
                  fallbackType="seal"
                  containerClassName="h-6 w-auto"
                  className="h-6 w-auto object-contain"
                />
              </div>
            </div>

            {/* Contact Details (3/12) */}
            <div className="md:col-span-3 space-y-2 text-sm text-surface/90">
              <h3 className="font-display font-bold text-base text-surface mb-3">
                Ubicación y contacto
              </h3>
              <p>Amapolas 1290, Of. 602</p>
              <p>Providencia, Santiago</p>
              <p>Metro Cristóbal Colón</p>
              <p className="pt-2">
                <a
                  href="tel:+56984727012"
                  className="hover:underline font-bold text-surface"
                >
                  +56 9 8472 7012
                </a>
              </p>
              <p>
                <a
                  href="mailto:contacto@odontologiaamapolas.cl"
                  className="hover:underline text-surface/80"
                >
                  contacto@odontologiaamapolas.cl
                </a>
              </p>
            </div>

            {/* Social Links (3/12) - NO brand icons from lucide-react */}
            <div className="md:col-span-3 space-y-3">
              <h3 className="font-display font-bold text-base text-surface mb-3">
                Redes sociales
              </h3>
              <div>
                <a
                  href="https://www.instagram.com/odontologia.amapolas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-surface hover:text-secondary transition-colors text-sm font-medium"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/odontologiaamapolas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-surface hover:text-secondary transition-colors text-sm font-medium"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-surface/20 text-center text-xs text-surface/75">
            <p>
              © 2026 Odontología Amapolas · Clínica certificada por la Seremi de
              Salud Metropolitana.
            </p>
          </div>
        </div>
      </footer>

      {/* BARRA MÓVIL FIJA (< 768px / md:hidden) */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-2 shadow-2xl"
        style={{
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          backgroundColor: '#086D90',
        }}
      >
        {/* Left half: WhatsApp */}
        <a
          href={waLink(
            'Hola, tengo una urgencia dental y necesito atención. Les escribo desde la web de Odontología Amapolas.'
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-whatsapp text-ink font-bold text-base h-16 flex items-center justify-center gap-2 active:opacity-90 transition-opacity"
        >
          <WhatsAppIcon className="w-5 h-5 text-ink" />
          <span>WhatsApp</span>
        </a>

        {/* Right half: Llamar */}
        <a
          href="tel:+56984727012"
          className="bg-alert text-surface font-bold text-[18px] h-16 flex items-center justify-center gap-2 active:opacity-90 transition-opacity"
        >
          <Phone className="w-5 h-5 text-surface" />
          <span>Llamar</span>
        </a>
      </div>

      {/* BOTÓN FLOTANTE DE ESCRITORIO (>= 768px / md:flex) */}
      <a
        href={waLink(
          'Hola, vengo de la web de Odontología Amapolas y quiero más información.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full bg-whatsapp items-center justify-center shadow-xl hover:-translate-y-1 transition-transform"
      >
        <WhatsAppIcon className="w-7 h-7 text-surface" size={28} />
      </a>
    </div>
  );
}
