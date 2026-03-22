import React from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
  message: string;
};

class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    message: '',
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      message: error.message || 'Unexpected render error',
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('App crashed in ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-6">
          <div className="max-w-xl w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-bold mb-3">Something went wrong</h1>
            <p className="text-slate-600 mb-3">
              The app hit a runtime error. Reload once, and if it persists, share this message.
            </p>
            <pre className="text-xs text-red-700 bg-red-50 border border-red-100 rounded-lg p-3 overflow-auto">
              {this.state.message}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;