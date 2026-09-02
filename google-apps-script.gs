/**
 * AI Growth Audit — Google Apps Script
 *
 * INSTALAÇÃO:
 * 1. Vai a https://script.google.com → Novo projecto
 * 2. Cola este código inteiro e apaga o que lá estava
 * 3. Substitui SEU_EMAIL_AQUI pelo teu email
 * 4. Cria uma Google Sheet em branco e copia o ID do URL
 *    (a parte entre /d/ e /edit) → substitui SHEET_ID_AQUI
 * 5. Clica em Implementar → Nova implementação
 *    Tipo: Aplicação Web
 *    Executar como: Eu (o teu email)
 *    Quem tem acesso: Qualquer pessoa
 * 6. Copia o URL que aparece → cola em DiagnosticoPage.jsx (APPS_SCRIPT_URL)
 * 7. A cada alteração ao código: Implementar → Gerir implementações → Editar → Nova versão → Implementar
 */

var NOTIFY_EMAIL  = 'rodrigomt@sapo.pt'
var SHEET_ID      = '11hXDsHK01S8J_SwJxCsxIIsbXGRfJ87xKPjQADqLk9o'
var SHEET_NAME    = 'Leads'   // nome do separador na Sheet

/* ── Headers da sheet (criados automaticamente na primeira execução) ── */
var HEADERS = [
  'Data', 'Hora', 'TIER', 'Score', 'Nome', 'Email', 'Empresa', 'Website',
  'Setor', 'Equipa', 'Faturação', 'Problemas', 'Maturidade IA', 'Intenção', 'Prioridade',
]

/* ── Paleta de cores por tier ── */
var TIER_COLOR = { A: '#c8f5d9', B: '#fff3cd', C: '#ffd6d6' }

function doPost(e) {
  try {
    var data  = JSON.parse(e.postData.contents)
    var sheet = getOrCreateSheet()
    var now   = new Date()

    // Append row
    var row = [
      Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd'),
      Utilities.formatDate(now, Session.getScriptTimeZone(), 'HH:mm:ss'),
      data._tier        || '—',
      data._score       || 0,
      data.nome         || '—',
      data.email        || '—',
      data.empresa      || '—',
      data.website      || '—',
      data.setor        || '—',
      data.equipa       || '—',
      data.faturacao    || '—',
      data.problemas    || '—',
      data.ia_maturidade|| '—',
      data.intencao     || '—',
      data.prioridade   || '—',
    ]
    var lastRow = sheet.getLastRow() + 1
    sheet.getRange(lastRow, 1, 1, row.length).setValues([row])

    // Highlight row by tier
    var color = TIER_COLOR[data._tier] || '#ffffff'
    sheet.getRange(lastRow, 1, 1, row.length).setBackground(color)

    // Bold the tier cell
    sheet.getRange(lastRow, 3).setFontWeight('bold')

    // Send email notification
    sendEmail(data, now)

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON)

  } catch (err) {
    Logger.log(err)
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function getOrCreateSheet() {
  var ss    = SpreadsheetApp.openById(SHEET_ID)
  var sheet = ss.getSheetByName(SHEET_NAME)

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
    var headerRange = sheet.getRange(1, 1, 1, HEADERS.length)
    headerRange.setValues([HEADERS])
    headerRange.setFontWeight('bold')
    headerRange.setBackground('#217FF1')
    headerRange.setFontColor('#ffffff')
    sheet.setFrozenRows(1)
    sheet.setColumnWidth(5, 160)   // Nome
    sheet.setColumnWidth(6, 210)   // Email
    sheet.setColumnWidth(7, 180)   // Empresa
    sheet.setColumnWidth(12, 260)  // Problemas
    sheet.setColumnWidth(15, 300)  // Prioridade
  }

  return sheet
}

function sendEmail(d, date) {
  var tierEmoji = { A: '🟢', B: '🟡', C: '🔴' }
  var emoji     = tierEmoji[d._tier] || '⚪'

  var subject = emoji + ' [TIER ' + d._tier + '] ' + d.empresa + ' — Score ' + d._score

  var body = [
    '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">',
    '<div style="background:#06142e;padding:24px 32px;border-radius:12px 12px 0 0">',
    '<h2 style="color:white;margin:0;font-size:20px">AI Growth Audit — Novo Lead</h2>',
    '<p style="color:rgba(255,255,255,0.6);margin:8px 0 0;font-size:13px">' + Utilities.formatDate(date, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm') + '</p>',
    '</div>',

    '<div style="background:#f8faff;padding:24px 32px;border:1px solid #e8edf5;border-top:none">',

    // Tier badge
    '<div style="display:inline-block;background:' + (TIER_COLOR[d._tier] || '#eee') + ';border-radius:8px;padding:8px 20px;margin-bottom:24px">',
    '<strong style="font-size:18px">TIER ' + d._tier + '</strong> &nbsp;·&nbsp; Score: <strong>' + d._score + '</strong> &nbsp;·&nbsp; ' + (d._tier_label || ''),
    '</div>',

    // Contact
    '<h3 style="color:#0a1c42;margin:0 0 12px;font-size:15px;border-bottom:1px solid #e8edf5;padding-bottom:8px">Contacto</h3>',
    '<table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px">',
    row('Nome',    d.nome),
    row('Email',   '<a href="mailto:' + d.email + '">' + d.email + '</a>'),
    row('Empresa', d.empresa),
    row('Website', d.website && d.website !== '—' ? '<a href="' + d.website + '">' + d.website + '</a>' : '—'),
    row('Setor',   d.setor),
    '</table>',

    // Qualification
    '<h3 style="color:#0a1c42;margin:0 0 12px;font-size:15px;border-bottom:1px solid #e8edf5;padding-bottom:8px">Qualificação</h3>',
    '<table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px">',
    row('Equipa',          d.equipa),
    row('Faturação',       d.faturacao),
    row('Problemas',       d.problemas),
    row('Maturidade IA',   d.ia_maturidade),
    row('Intenção invest.', '<strong>' + d.intencao + '</strong>'),
    '</table>',

    // Open field
    d.prioridade && d.prioridade !== '—' ? [
      '<h3 style="color:#0a1c42;margin:0 0 8px;font-size:15px">Prioridade em 90 dias</h3>',
      '<div style="background:#EEF4FF;border-left:3px solid #217FF1;padding:12px 16px;border-radius:0 8px 8px 0;font-size:14px;color:#333;line-height:1.6">' + d.prioridade + '</div>',
    ].join('') : '',

    '</div>',

    // CTA footer
    '<div style="background:#217FF1;padding:16px 32px;border-radius:0 0 12px 12px;text-align:center">',
    '<a href="mailto:' + d.email + '" style="color:white;font-weight:bold;font-size:14px;text-decoration:none">Responder a ' + d.nome + ' →</a>',
    '</div>',

    '</div>',
  ].join('')

  GmailApp.sendEmail(NOTIFY_EMAIL, subject, '', { htmlBody: body })
}

function row(label, value) {
  return '<tr><td style="padding:7px 12px 7px 0;color:#888;white-space:nowrap;vertical-align:top">' + label + '</td>'
       + '<td style="padding:7px 0;color:#111;font-weight:500">' + (value || '—') + '</td></tr>'
}
