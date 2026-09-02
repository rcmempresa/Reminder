-- Tabela de leads do CRM Remindr
-- Colar no SQL Editor do Supabase e clicar em Run

create table leads (
  id uuid primary key default gen_random_uuid(),
  nome text,
  clinica text,
  whatsapp text,
  email text,
  tipo text,
  consultas text,
  faturacao text,
  dor text,
  stage text not null default 'nova',
  notes text default '',
  meeting_date timestamptz,
  meeting_link text default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Atualiza updated_at automaticamente a cada UPDATE
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger leads_updated_at
  before update on leads
  for each row execute function update_updated_at();

-- Row Level Security (acesso público controlado pelo anon key)
alter table leads enable row level security;

-- Permite inserir leads do formulário público
create policy "Inserir leads públicas"
  on leads for insert
  with check (true);

-- Permite leitura e edição apenas com service role (CRM)
create policy "CRM lê todas as leads"
  on leads for select
  using (true);

create policy "CRM atualiza leads"
  on leads for update
  using (true);

create policy "CRM elimina leads"
  on leads for delete
  using (true);
