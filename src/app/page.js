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
    <header className="sticky top-0 z-50 bg-surface border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo mark */}
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm tracking-widest">CM</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Mini <span className="text-primary">CMS</span>
          </h1>
        </div>

        {/* Article count badge */}
        <div className="flex items-center gap-2 text-sm text-muted">
          <span className="hidden sm:inline font-medium">Articles</span>
          <span className="inline-flex items-center justify-center min-w-[1.75rem] h-7 px-2.5 rounded-full bg-primary-light text-primary font-bold text-xs shadow-sm">
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
    <div className="rounded-2xl pb-2 clean-card">
      <div className="p-6 sm:p-8 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground">
          {isEditing ? "Edit Article" : "Create New Article"}
        </h2>
        <p className="text-sm text-muted mt-1.5 font-medium">
          {isEditing
            ? "Update the fields below and save your changes."
            : "Fill in the details below to publish a new article."}
        </p>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Title */}
        <div className="group">
          <label
            htmlFor="article-title"
            className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-primary transition-colors"
          >
            Title
          </label>
          <input
            id="article-title"
            type="text"
            placeholder="Enter article title…"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/60 text-base transition-all duration-200 focus:bg-white"
          />
        </div>

        {/* Content */}
        <div className="group">
          <label
            htmlFor="article-content"
            className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-primary transition-colors"
          >
            Content
          </label>
          <textarea
            id="article-content"
            rows={5}
            placeholder="Write your article content…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/60 text-base resize-y min-h-[120px] transition-all duration-200 focus:bg-white"
          />
        </div>

        {/* Author */}
        <div className="group">
          <label
            htmlFor="article-author"
            className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-primary transition-colors"
          >
            Author
          </label>
          <input
            id="article-author"
            type="text"
            placeholder="Author name…"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/60 text-base transition-all duration-200 focus:bg-white"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-wrap items-center gap-4">
        <button
          id="submit-article-btn"
          onClick={onSubmit}
          disabled={
            isSubmitting ||
            !(title?.trim()) ||
            !(content?.trim())
          }
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm
                     hover:bg-primary-hover active:scale-[0.97]
                     disabled:bg-muted disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
                     shadow-sm hover:shadow-md
                     transition-all duration-200 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <SpinnerIcon className="w-5 h-5" />
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
            className="px-6 py-3 rounded-xl border border-border bg-background text-muted font-semibold text-sm
                       hover:bg-surface hover:text-foreground hover:shadow-sm
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
      className="group cursor-pointer clean-card rounded-2xl flex flex-col overflow-hidden"
    >
      {/* Card body */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Author badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-light text-primary text-xs font-semibold rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {article.author || "Unknown"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {article.title}
        </h3>

        {/* Content preview */}
        <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-3">
          {article.content}
        </p>
      </div>

      {/* Card footer */}
      <div className="px-6 py-4 border-t border-border bg-surface flex items-center justify-between">
        <span className="text-xs font-medium text-muted">
          {article.createdAt
            ? new Date(article.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "Just now"}
        </span>

        <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(article);
            }}
            className="p-2 rounded-lg text-muted hover:text-primary hover:bg-primary-light transition-all duration-200 cursor-pointer"
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
            className="p-2 rounded-lg text-muted hover:text-danger hover:bg-red-50 transition-all duration-200 disabled:opacity-40 cursor-pointer"
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
    <div className="col-span-full flex flex-col items-center justify-center py-24 text-center clean-card rounded-2xl mx-auto w-full max-w-2xl px-6">
      <div className="p-6 bg-primary-light rounded-full mb-4 inline-block text-primary">
        <DocumentIcon />
      </div>
      <h3 className="text-xl font-bold text-foreground">
        No articles found
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

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* ── Form Section ─── */}
        <section className="max-w-3xl mx-auto">
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
              className="bg-surface rounded-2xl shadow-xl max-w-2xl w-full p-8 relative max-h-[85vh] overflow-hidden border border-border"
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