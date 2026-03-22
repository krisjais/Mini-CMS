"use client";

import { useState, useEffect, useCallback } from "react";

/* ───────── SVG Icon Components ───────── */
function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-16 text-muted/40"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function SpinnerIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={`animate-spin ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

/* ───────── Navbar ───────── */
function Navbar({ articleCount }) {
  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo mark */}
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-md shadow-primary/25">
            <span className="text-white font-bold text-sm">CM</span>
          </div>
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            Mini CMS
          </h1>
        </div>

        {/* Article count badge */}
        <div className="flex items-center gap-2 text-sm text-muted">
          <span className="hidden sm:inline">Articles</span>
          <span className="inline-flex items-center justify-center min-w-[1.75rem] h-7 px-2 rounded-full bg-primary-light text-primary font-semibold text-xs">
            {articleCount}
          </span>
        </div>
      </div>
    </header>
  );
}

/* ───────── Article Form ───────── */
function ArticleForm({
  title,
  setTitle,
  content,
  setContent,
  author,
  setAuthor,
  onSubmit,
  isSubmitting,
  editingId,
  onCancelEdit,
}) {
  const isEditing = editingId !== null;

  return (
    <div className="bg-surface rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">
          {isEditing ? "Edit Article" : "Create New Article"}
        </h2>
        <p className="text-sm text-muted mt-1">
          {isEditing
            ? "Update the fields below and save your changes."
            : "Fill in the details below to publish a new article."}
        </p>
      </div>

      <div className="p-6 space-y-5">
        {/* Title */}
        <div>
          <label
            htmlFor="article-title"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Title
          </label>
          <input
            id="article-title"
            type="text"
            placeholder="Enter article title…"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/60 text-sm transition-all duration-200"
          />
        </div>

        {/* Content */}
        <div>
          <label
            htmlFor="article-content"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Content
          </label>
          <textarea
            id="article-content"
            rows={4}
            placeholder="Write your article content…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/60 text-sm resize-y min-h-[100px] transition-all duration-200"
          />
        </div>

        {/* Author */}
        <div>
          <label
            htmlFor="article-author"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Author
          </label>
          <input
            id="article-author"
            type="text"
            placeholder="Author name…"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/60 text-sm transition-all duration-200"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 pb-6 flex items-center gap-3">
        <button
          id="submit-article-btn"
          onClick={onSubmit}
          disabled={
            isSubmitting ||
            !(title?.trim()) ||
            !(content?.trim())
          }
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-medium text-sm
                     hover:bg-primary-hover active:scale-[0.97]
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
                     shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30
                     transition-all duration-200 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <SpinnerIcon className="w-4 h-4" />
              {isEditing ? "Saving…" : "Publishing…"}
            </>
          ) : (
            <>
              <PlusIcon />
              {isEditing ? "Save Changes" : "Publish Article"}
            </>
          )}
        </button>

        {isEditing && (
          <button
            onClick={onCancelEdit}
            className="px-5 py-2.5 rounded-xl border border-border text-muted font-medium text-sm
                       hover:bg-background hover:text-foreground
                       transition-all duration-200 cursor-pointer"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

/* ───────── Article Card ───────── */
function ArticleCard({ article, onView, onEdit, onDelete, isDeleting }) {
  return (
    <article
      onClick={() => onView(article)}
      className="group cursor-pointer bg-surface rounded-2xl border border-border shadow-sm
                 hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5
                 transition-all duration-300 flex flex-col"
    >
      {/* Card body */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Author badge */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-light text-primary text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {article.author || "Unknown"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-foreground leading-snug mb-2 line-clamp-2">
          {article.title}
        </h3>

        {/* Content preview */}
        <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-3">
          {article.content}
        </p>
      </div>

      {/* Card footer */}
      <div className="px-5 py-3 border-t border-border flex items-center justify-between">
        <span className="text-xs text-muted/70">
          {article.createdAt
            ? new Date(article.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "Just now"}
        </span>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(article);
            }}
            className="p-2 rounded-lg text-muted hover:text-primary hover:bg-primary-light transition-colors duration-150 cursor-pointer"
            title="Edit"
          >
            <PencilIcon />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(article._id);
            }}
            disabled={isDeleting}
            className="p-2 rounded-lg text-muted hover:text-danger hover:bg-red-50 transition-colors duration-150 disabled:opacity-40 cursor-pointer"
            title="Delete"
          >
            {isDeleting ? (
              <SpinnerIcon className="w-4 h-4" />
            ) : (
              <TrashIcon />
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

/* ───────── Empty State ───────── */
function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <DocumentIcon />
      <h3 className="mt-4 text-lg font-semibold text-foreground">
        No articles yet
      </h3>
      <p className="mt-1 text-sm text-muted max-w-sm">
        Get started by creating your first article using the form above. Your
        published content will appear here.
      </p>
    </div>
  );
}

/* ───────── Loading Skeleton ───────── */
function ArticleSkeleton() {
  return (
    <div className="bg-surface rounded-2xl border border-border p-5 animate-pulse">
      <div className="h-5 w-24 bg-border rounded-full mb-4" />
      <div className="h-5 w-3/4 bg-border rounded mb-2" />
      <div className="space-y-2 mt-3">
        <div className="h-3 bg-border rounded w-full" />
        <div className="h-3 bg-border rounded w-5/6" />
        <div className="h-3 bg-border rounded w-2/3" />
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════
   MAIN PAGE
   ═════════════════════════════════════════════ */
export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API = "http://localhost:3001/articles";

  /* ── Load articles ────────────────── */
  const loadArticles = useCallback(async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setArticles(data);
    } catch (err) {
      console.error("Failed to load articles:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);
  /* ── Create / Update ──────────────── */
  async function handleSubmit() {
    if (!title.trim() || !content.trim()) return;
    setIsSubmitting(true);
    try {
      if (editingId) {
        await fetch(`${API}/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, content, author }),
        });
      } else {
        await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, content, author }),
        });
      }
      setTitle("");
      setContent("");
      setAuthor("");
      setEditingId(null);
      await loadArticles();
    } catch (err) {
      console.error("Submit failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  /* ── Delete ───────────────────────── */
  async function handleDelete(id) {
    setDeletingId(id);
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      await loadArticles();
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeletingId(null);
    }
  }

  /* ── Edit (populate form) ─────────── */
  function handleEdit(article) {
    setTitle(article.title || "");
    setContent(article.content || "");
    setAuthor(article.author || "");
    setEditingId(article._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setTitle("");
    setContent("");
    setAuthor("");
    setEditingId(null);
  }

  function handleViewArticle(article) {
    window.location.href = `/ARTICLES/${article._id}`;
  }

  function handleCloseModal() {
    setSelectedArticle(null);
    setIsModalOpen(false);
  }

  /* ── Render ───────────────────────── */
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar articleCount={articles.length} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* ── Form Section ─── */}
        <section className="max-w-2xl">
          <ArticleForm
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            author={author}
            setAuthor={setAuthor}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            editingId={editingId}
            onCancelEdit={cancelEdit}
          />
        </section>

        {/* ── Articles Section ─── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">
              Published Articles
            </h2>
            {!isLoading && articles.length > 0 && (
              <span className="text-sm text-muted">
                {articles.length} article{articles.length !== 1 && "s"}
              </span>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              <>
                <ArticleSkeleton />
                <ArticleSkeleton />
                <ArticleSkeleton />
              </>
            ) : articles.length === 0 ? (
              <EmptyState />
            ) : (
              articles.map((a) => (
                <ArticleCard
                  key={a._id}
                  article={a}
                  onView={handleViewArticle}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  isDeleting={deletingId === a._id}
                />
              ))
            )}
          </div>
        </section>

        {isModalOpen && selectedArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={handleCloseModal}
          >
            <div
              className="bg-surface rounded-2xl shadow-xl max-w-2xl w-full p-6 relative max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-muted hover:text-foreground"
                aria-label="Close"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-foreground mb-3">
                {selectedArticle.title}
              </h3>

              <div className="mb-4 text-sm text-muted">
                <span className="font-semibold text-foreground">Author:</span>{" "}
                {selectedArticle.author || "Unknown"}
              </div>

              <div className="max-h-[50vh] overflow-y-auto text-foreground leading-relaxed whitespace-pre-wrap p-2 border border-border rounded-lg bg-background">
                {selectedArticle.content}
              </div>

              {selectedArticle.createdAt && (
                <p className="mt-4 text-xs text-muted">
                  Published: {new Date(selectedArticle.createdAt).toLocaleString()}
                </p>
              )}
            </div>
          </div>
        )}
      </main>

      {/* ── Footer ─── */}
      {/* <footer className="border-t border-border py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <span>© {new Date().getFullYear()} Mini CMS. All rights reserved.</span>
          <span>
            Built with{" "}
            <span className="text-primary font-medium">Next.js</span> &{" "}
            <span className="text-primary font-medium">Tailwind CSS</span>
          </span>
        </div>
      </footer> */}
    </div>
  );
}