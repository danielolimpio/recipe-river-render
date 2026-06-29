import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { PageBanner } from '@/components/PageBanner';
import { Scale, BookOpen, AlertTriangle, Copyright, Gavel, Mail } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <Layout>
      <SEO
        title="Termos e Condições — Culinária Fitness"
        description="Conheça os Termos e Condições de uso do Culinária Fitness: direitos, deveres e regras de conduta para uso do nosso portal."
        path="/termos-e-condicoes"
      />
      <PageBanner
        title="Termos e Condições"
        description="Regras claras para o uso do portal Culinária Fitness."
        current="Termos e Condições"
      />

      <section className="py-16">
        <div className="container-tasty max-w-4xl">
          <p className="text-sm text-tasty-gray mb-10">Última atualização: 29 de junho de 2026</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { icon: Scale, title: 'Uso justo', text: 'Conteúdo gratuito para uso pessoal e não comercial.' },
              { icon: Copyright, title: 'Direitos autorais', text: 'Todo o conteúdo é protegido por lei de propriedade intelectual.' },
              { icon: BookOpen, title: 'Caráter informativo', text: 'Receitas e dicas têm fins informativos e não substituem orientação profissional.' },
              { icon: Gavel, title: 'Foro brasileiro', text: 'Aplicação da legislação brasileira para resolução de conflitos.' },
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
            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">1. Aceitação dos termos</h2>
            <p className="text-tasty-gray mb-6">
              Ao acessar e utilizar o site culinariafitness.com, você concorda integralmente com estes Termos e
              Condições. Caso não concorde, recomendamos que não utilize nossos serviços.
            </p>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">2. Objeto</h2>
            <p className="text-tasty-gray mb-6">
              O Culinária Fitness é um portal de conteúdo dedicado a receitas saudáveis, dicas de nutrição e
              empreendedorismo gastronômico. As informações têm caráter informativo e educacional.
            </p>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-tasty-orange" /> 3. Aviso de responsabilidade
            </h2>
            <div className="rounded-xl border-l-4 border-tasty-orange bg-tasty-peach/40 p-5 mb-6">
              <p className="text-tasty-gray text-sm">
                As receitas e informações nutricionais publicadas <strong>não substituem orientação médica,
                nutricional ou profissional</strong>. Em caso de restrições alimentares, alergias ou condições
                de saúde, consulte sempre um especialista.
              </p>
            </div>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">4. Uso permitido</h2>
            <ul className="space-y-2 mb-6 text-tasty-gray">
              <li>• Você pode acessar, ler e preparar as receitas para uso pessoal.</li>
              <li>• É permitido compartilhar links das publicações em redes sociais.</li>
              <li>• É vedada a reprodução total ou parcial sem autorização prévia por escrito.</li>
              <li>• É proibido utilizar o conteúdo para fins comerciais sem licenciamento.</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3 flex items-center gap-2">
              <Copyright className="h-6 w-6 text-tasty-orange" /> 5. Propriedade intelectual
            </h2>
            <p className="text-tasty-gray mb-6">
              Todo o conteúdo do site — incluindo textos, imagens, vídeos, logotipos, layout e código — é de
              propriedade do Culinária Fitness ou utilizado mediante licença, sendo protegido pelas leis de
              direitos autorais e propriedade industrial.
            </p>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">6. Conduta do usuário</h2>
            <p className="text-tasty-gray mb-2">É proibido:</p>
            <ul className="space-y-2 mb-6 text-tasty-gray">
              <li>• Publicar conteúdo ofensivo, discriminatório ou ilegal nos comentários.</li>
              <li>• Tentar invadir, modificar ou prejudicar o funcionamento do site.</li>
              <li>• Utilizar bots, scrapers ou ferramentas automatizadas sem autorização.</li>
              <li>• Praticar qualquer ato que viole direitos de terceiros.</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">7. Links externos</h2>
            <p className="text-tasty-gray mb-6">
              O site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo ou
              práticas de privacidade desses sites.
            </p>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">8. Limitação de responsabilidade</h2>
            <p className="text-tasty-gray mb-6">
              O Culinária Fitness não se responsabiliza por danos diretos ou indiretos decorrentes do uso ou da
              impossibilidade de uso do site, nem por resultados obtidos a partir do preparo das receitas.
            </p>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">9. Alterações</h2>
            <p className="text-tasty-gray mb-6">
              Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações entram em vigor
              imediatamente após a publicação nesta página.
            </p>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3 flex items-center gap-2">
              <Gavel className="h-6 w-6 text-tasty-orange" /> 10. Legislação e foro
            </h2>
            <p className="text-tasty-gray mb-6">
              Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca de São Paulo/SP
              para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>

            <div className="flex items-center gap-3 rounded-xl bg-gradient-premium text-white p-5 mt-8">
              <Mail className="h-5 w-5" />
              <p className="text-sm">
                Dúvidas? Entre em contato: <span className="font-bold underline">contato@culinariafitness.com</span>
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default TermsAndConditions;
