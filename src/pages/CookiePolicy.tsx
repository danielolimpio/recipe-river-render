import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { PageBanner } from '@/components/PageBanner';
import { Cookie, Shield, Settings, Eye, ToggleRight, Mail } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <Layout>
      <SEO
        title="Política de Cookies — Culinária Fitness"
        description="Saiba como o Culinária Fitness utiliza cookies para melhorar sua experiência, personalizar conteúdo e analisar o tráfego do site."
        path="/politica-de-cookies"
      />
      <PageBanner
        title="Política de Cookies"
        description="Entenda como utilizamos cookies para oferecer a melhor experiência de navegação."
        current="Política de Cookies"
      />

      <section className="py-16">
        <div className="container-tasty max-w-4xl">
          <p className="text-sm text-tasty-gray mb-10">Última atualização: 29 de junho de 2026</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { icon: Cookie, title: 'O que são cookies', text: 'Pequenos arquivos de texto armazenados no seu dispositivo durante a navegação.' },
              { icon: Shield, title: 'Sua segurança', text: 'Cookies não armazenam dados pessoais sensíveis nem causam danos ao dispositivo.' },
              { icon: Settings, title: 'Seu controle', text: 'Você pode aceitar, recusar ou apagar cookies a qualquer momento no navegador.' },
              { icon: Eye, title: 'Transparência total', text: 'Listamos abaixo todos os tipos de cookies utilizados pelo Culinária Fitness.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-white p-5 shadow-soft">
                <div className="w-10 h-10 rounded-full bg-gradient-premium text-white flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-tasty-dark mb-1">{title}</h3>
                <p className="text-sm text-tasty-gray">{text}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-neutral max-w-none">
            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">1. Introdução</h2>
            <p className="text-tasty-gray mb-6">
              Esta Política de Cookies explica o que são cookies, como o Culinária Fitness (culinariafitness.com)
              os utiliza, quais tipos coletamos e quais as suas opções como visitante. Ao continuar navegando em
              nosso site, você concorda com o uso de cookies conforme descrito abaixo.
            </p>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">2. Tipos de cookies que utilizamos</h2>
            <div className="space-y-4 mb-8">
              {[
                { title: 'Cookies essenciais', text: 'Necessários para o funcionamento do site, como navegação entre páginas e segurança.' },
                { title: 'Cookies de desempenho', text: 'Coletam informações anônimas sobre como os visitantes utilizam o site (páginas mais visitadas, erros).' },
                { title: 'Cookies de funcionalidade', text: 'Permitem que o site lembre suas preferências, como idioma e região.' },
                { title: 'Cookies analíticos e de marketing', text: 'Ajudam a medir a eficácia de conteúdos e a personalizar anúncios e recomendações de receitas.' },
              ].map((c) => (
                <div key={c.title} className="rounded-lg border-l-4 border-tasty-orange bg-tasty-peach/40 p-4">
                  <h3 className="font-bold text-tasty-dark">{c.title}</h3>
                  <p className="text-sm text-tasty-gray">{c.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">3. Como gerenciar cookies</h2>
            <div className="flex gap-3 rounded-xl bg-white border border-border p-5 mb-6">
              <ToggleRight className="h-6 w-6 text-tasty-orange shrink-0 mt-1" />
              <p className="text-tasty-gray text-sm">
                A maioria dos navegadores permite que você gerencie suas preferências de cookies nas configurações.
                Você pode bloquear, excluir ou ser notificado quando um cookie estiver sendo enviado. Lembre-se de
                que desabilitar cookies pode afetar funcionalidades do site.
              </p>
            </div>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">4. Cookies de terceiros</h2>
            <p className="text-tasty-gray mb-6">
              Podemos utilizar serviços de terceiros, como Google Analytics, Meta Pixel e parceiros publicitários,
              que também instalam cookies para suas próprias finalidades. Consulte as políticas desses parceiros
              para mais informações.
            </p>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">5. Atualizações desta política</h2>
            <p className="text-tasty-gray mb-6">
              Esta política pode ser atualizada periodicamente. Recomendamos revisá-la sempre que visitar o site.
            </p>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">6. Contato</h2>
            <div className="flex items-center gap-3 rounded-xl bg-gradient-premium text-white p-5">
              <Mail className="h-5 w-5" />
              <p className="text-sm">
                Dúvidas sobre cookies? Entre em contato: <span className="font-bold underline">contato@culinariafitness.com</span>
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;
