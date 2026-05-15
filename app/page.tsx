export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Auto-Grade Open-Ended Quiz Responses
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your rubric, collect student answers, and let AI grade every short-answer and essay question with detailed, consistent feedback — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Grading for $8/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-white mb-1">Custom Rubrics</h3>
            <p className="text-sm text-[#8b949e]">Define scoring criteria per question. The AI grades strictly against your rubric.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-white mb-1">Instant Feedback</h3>
            <p className="text-sm text-[#8b949e]">Students receive scores and written feedback the moment they submit.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Grade Analytics</h3>
            <p className="text-sm text-[#8b949e]">See class-wide score distributions and identify knowledge gaps at a glance.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$8</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited quizzes &amp; rubrics</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI grading for short-answer &amp; essays</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Detailed per-student feedback</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Grade analytics dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Export results to CSV</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How accurate is the AI grading?</h3>
            <p className="text-sm text-[#8b949e]">The AI grades against your exact rubric criteria, achieving consistency that matches or exceeds human graders for structured short-answer questions. You can always review and override any score.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What types of questions can it grade?</h3>
            <p className="text-sm text-[#8b949e]">Short-answer questions, paragraph responses, and multi-paragraph essays. Multiple choice is handled automatically without AI credits.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Quiz Auto-Grader. All rights reserved.
      </footer>
    </main>
  );
}
