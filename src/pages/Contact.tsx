import { Layout } from '@/components/Layout';
import { PageBanner } from '@/components/PageBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Send, Phone } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Contact = () => {
  return (
    <Layout>
      <PageBanner
        title="Contato"
        description="Estamos sempre à disposição para tirar suas dúvidas, receber sugestões e novas receitas."
        current="Contato"
      />

      {/* Info cards */}
      <section className="py-20" aria-labelledby="contact-info-heading">
        <div className="container-tasty">
          <h2 id="contact-info-heading" className="text-2xl md:text-3xl font-extrabold text-tasty-dark text-center mb-10">
            Informações de Contato
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: 'Endereço', lines: ['Rua das Flores, 123', 'São Paulo - SP, Brasil'] },
            { icon: Send, title: 'E-mail', lines: ['contato@tasty.com', 'parceria@tasty.com'] },
            { icon: Phone, title: 'Telefone', lines: ['(+55) 11 5555-1212', '(+55) 11 5555-0100'] },
          ].map(({ icon: Icon, title, lines }) => (
            <div key={title} className="bg-white shadow-card rounded-md py-10 px-8 text-center">
              <Icon className="h-8 w-8 text-tasty-orange mx-auto mb-5" />
              <h3 className="font-extrabold text-tasty-dark mb-3">{title}</h3>
              {lines.map((l) => (
                <p key={l} className="text-sm text-tasty-gray">{l}</p>
              ))}
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* FAQ + Form */}
      <section className="pb-24">
        <div className="container-tasty grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-tasty-dark mb-5">Dúvidas Frequentes</h2>
            <p className="text-tasty-gray text-sm mb-8">
              Encontre respostas para as principais perguntas sobre receitas, assinatura e parcerias.
              Não encontrou? Envie sua mensagem ao lado.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: 'Como envio minha receita para o site?', a: 'Use o formulário ao lado ou clique em "Enviar Receita" no topo. Nossa equipe avaliará em até 5 dias úteis.' },
                { q: 'As receitas têm versões sem glúten ou veganas?', a: 'Sim! Muitas receitas trazem variações e dicas para substituições. Basta filtrar pela categoria desejada.' },
                { q: 'Posso colaborar como chef parceiro?', a: 'Adoramos novas parcerias. Envie um e-mail para parceria@tasty.com com seu portfólio.' },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-bold text-tasty-dark hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-tasty-gray">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="bg-white rounded-lg shadow-card p-8 md:p-10">
            <h3 className="text-2xl font-extrabold text-tasty-dark mb-2">Fale Conosco</h3>
            <p className="text-tasty-gray text-sm mb-6">Preencha o formulário e retornaremos em breve.</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="sr-only">Nome</label>
                <Input id="contact-name" placeholder="Nome *" aria-label="Seu nome" className="h-11" />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">E-mail</label>
                <Input id="contact-email" type="email" placeholder="E-mail *" aria-label="Seu e-mail" className="h-11" />
              </div>
              <div>
                <label htmlFor="contact-subject" className="sr-only">Assunto</label>
                <Input id="contact-subject" placeholder="Assunto" aria-label="Assunto da mensagem" className="h-11" />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Mensagem</label>
                <Textarea id="contact-message" placeholder="Mensagem *" aria-label="Sua mensagem" rows={5} />
              </div>
              <Button className="rounded-full bg-tasty-orange hover:bg-tasty-orange-hover text-white px-6 h-11 font-semibold">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
