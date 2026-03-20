import Link from "next/link";
import { notFound } from "next/navigation";

async function fetchArticle(id) {
  const res = await fetch(`http://localhost:3000/articles/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  try {
    return await res.json();
  } catch {
    return null;
  }
}

function formatDate(dateString) {
  if (!dateString) return "Unknown date";
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
}

export default async function ArticlePage({ params }) {
  const { id } = params;
  const article = await fetchArticle(id);

  if (!article || !article._id) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            ← Back to Home
          </Link>
          <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Blog post
          </span>
        </div>

        <article className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-200/70 ring-1 ring-slate-100 sm:p-10">
          <header className="mb-8">
            <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              {article.title || "Untitled Article"}
            </h1>
            <p className="mt-4 text-sm text-slate-500 sm:text-base">
              By <span className="font-semibold text-slate-700">{article.author || "Unknown"}</span>
              <span className="mx-2">•</span>
              {formatDate(article.createdAt || article.updatedAt || new Date().toISOString())}
            </p>
          </header>

          <div className="mb-6 h-px bg-slate-200" />

          <section className="space-y-6 text-slate-700 leading-relaxed">
            {article.content ? (
              article.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-lg">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-lg text-slate-500">No content available for this article.</p>
            )}
          </section>

          <div className="mt-10 rounded-xl bg-slate-50 p-6 text-sm text-slate-500 ring-1 ring-slate-100">
            <p className="font-medium text-slate-700">Did you enjoy this article?</p>
            <p className="mt-1">You can go back to the home page and manage posts in the Mini CMS.</p>
          </div>
        </article>
      </div>
    </main>
  );
}
