import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { PageBanner } from '@/components/PageBanner';
import { Lock, UserCheck, Database, ShieldCheck, FileText, Mail, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO
        title="Política de Privacidade — Culinária Fitness"
        description="Saiba como o Culinária Fitness coleta, utiliza e protege os seus dados pessoais em conformidade com a LGPD."
        path="/politica-de-privacidade"
      />
      <PageBanner
        title="Política de Privacidade"
        description="Sua privacidade é prioridade. Entenda como cuidamos das suas informações."
        current="Política de Privacidade"
      />

      <section className="py-16">
        <div className="container-tasty max-w-4xl">
          <p className="text-sm text-tasty-gray mb-10">Última atualização: 29 de junho de 2026</p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Lock, title: 'Dados protegidos', text: 'Criptografia e boas práticas de segurança em todas as camadas.' },
              { icon: UserCheck, title: 'Seus direitos', text: 'Acesso, correção e exclusão dos dados garantidos pela LGPD.' },
              { icon: ShieldCheck, title: 'Uso responsável', text: 'Nunca vendemos seus dados a terceiros.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-white p-5 shadow-soft text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-premium text-white flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-tasty-dark mb-1">{title}</h3>
                <p className="text-sm text-tasty-gray">{text}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-neutral max-w-none">
            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3 flex items-center gap-2">
              <FileText className="h-6 w-6 text-tasty-orange" /> 1. Quem somos
            </h2>
            <p className="text-tasty-gray mb-6">
              O Culinária Fitness (culinariafitness.com) é um portal de receitas saudáveis. Esta Política de
              Privacidade descreve como tratamos as informações dos visitantes em conformidade com a Lei Geral
              de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3 flex items-center gap-2">
              <Database className="h-6 w-6 text-tasty-orange" /> 2. Dados que coletamos
            </h2>
            <ul className="space-y-2 mb-6 text-tasty-gray">
              <li>• <strong>Dados de cadastro:</strong> nome e e-mail quando você assina a newsletter ou envia uma receita.</li>
              <li>• <strong>Dados de navegação:</strong> endereço IP, tipo de dispositivo, navegador e páginas visitadas.</li>
              <li>• <strong>Dados de contato:</strong> informações enviadas pelo formulário de contato.</li>
              <li>• <strong>Cookies:</strong> conforme detalhado em nossa Política de Cookies.</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">3. Como utilizamos seus dados</h2>
            <p className="text-tasty-gray mb-2">Utilizamos seus dados para:</p>
            <ul className="space-y-2 mb-6 text-tasty-gray">
              <li>• Enviar newsletters, receitas e novidades (mediante consentimento).</li>
              <li>• Responder a solicitações e mensagens de contato.</li>
              <li>• Analisar o uso do site e melhorar a experiência dos visitantes.</li>
              <li>• Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">4. Compartilhamento de dados</h2>
            <div className="rounded-xl border-l-4 border-tasty-orange bg-tasty-peach/40 p-5 mb-6">
              <p className="text-tasty-gray text-sm">
                O Culinária Fitness <strong>não vende</strong> seus dados. Compartilhamos informações apenas com
                fornecedores essenciais (hospedagem, e-mail marketing, analytics) que atuam sob acordos de
                confidencialidade e proteção de dados.
              </p>
            </div>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">5. Seus direitos (LGPD)</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                'Confirmar a existência de tratamento',
                'Acessar seus dados',
                'Corrigir dados incompletos ou desatualizados',
                'Solicitar anonimização ou exclusão',
                'Revogar o consentimento a qualquer momento',
                'Solicitar portabilidade dos dados',
              ].map((right) => (
                <div key={right} className="flex items-start gap-2 rounded-lg bg-white border border-border p-3">
                  <UserCheck className="h-4 w-4 text-tasty-orange shrink-0 mt-1" />
                  <span className="text-sm text-tasty-gray">{right}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">6. Segurança</h2>
            <p className="text-tasty-gray mb-6">
              Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados,
              perda ou destruição. No entanto, nenhum sistema é 100% seguro — em caso de incidente, você será
              notificado conforme exige a legislação.
            </p>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3 flex items-center gap-2">
              <Globe className="h-6 w-6 text-tasty-orange" /> 7. Retenção e exclusão
            </h2>
            <p className="text-tasty-gray mb-6">
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas ou conforme exigido
              por lei. Após esse prazo, os dados são excluídos ou anonimizados.
            </p>

            <h2 className="text-2xl font-extrabold text-tasty-dark mb-3">8. Atualizações</h2>
            <p className="text-tasty-gray mb-6">
              Esta política pode ser revisada periodicamente. A versão mais recente estará sempre disponível
              nesta página.
            </p>

            <div className="flex items-center gap-3 rounded-xl bg-gradient-premium text-white p-5 mt-8">
              <Mail className="h-5 w-5" />
              <p className="text-sm">
                Para exercer seus direitos, escreva para: <span className="font-bold underline">contato@culinariafitness.com</span>
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
