"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
  );
}

function SpinnerIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const id = params?.id;

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/articles/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Article not found");
        }
        return res.json();
      })
      .then(data => {
        setArticle(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Match */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-md shadow-primary/25">
              <span className="text-white font-bold text-sm">CM</span>
            </div>
            <h1 className="text-xl font-semibold tracking-tight text-foreground">
              Mini CMS
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl border border-border bg-surface text-muted hover:text-foreground hover:bg-background transition-all cursor-pointer"
        >
          <ArrowLeftIcon />
          <span className="font-medium text-sm">Back</span>
        </button>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <SpinnerIcon className="w-8 h-8 text-primary" />
          </div>
        ) : error ? (
          <div className="bg-red-50/50 border border-red-200 p-8 rounded-2xl text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-2">Oops! Error loading article.</h2>
            <p className="text-muted">{error}</p>
          </div>
        ) : article ? (
          <div className="bg-surface rounded-3xl border border-border shadow-md p-8 sm:p-12">
            <header className="mb-8 border-b border-border pb-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight tracking-tight mb-5">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-3 py-1.5 rounded-full font-semibold">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {article.author || "Unknown Author"}
                </div>
                
                {article.createdAt && (
                  <span className="text-muted/80 font-medium">
                    {new Date(article.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                )}
              </div>
            </header>
            
            <div className="prose prose-slate max-w-none">
              <div className="text-foreground/90 leading-relaxed whitespace-pre-wrap text-lg font-medium">
                {article.content}
              </div>
            </div>
          </div>
        ) : null}
      </main>

      <footer className="border-t border-border py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-xs text-muted">
          <span>© {new Date().getFullYear()} Mini CMS. View individual article.</span>
        </div>
      </footer>
    </div>
  );
}
