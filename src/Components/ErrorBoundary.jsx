import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Hata yakalandığında durum güncellemesi
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Hata hakkında loglama veya analiz yapmak için kullanılabilir
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Hata durumunda gösterilecek yedek kullanıcı arayüzü
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
