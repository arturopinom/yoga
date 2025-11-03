const { useState, useEffect, useRef } = React;

const YogaLanding = () => {
    const [isBarVisible, setIsBarVisible] = useState(false);
    const [isBarTransparent, setIsBarTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > 100) {
                setIsBarVisible(true);
                setIsBarTransparent(false);
            } else {
                setIsBarVisible(false);
                setIsBarTransparent(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Initialize Swiper for Benefits
        if (window.innerWidth < 768) {
            new Swiper('.benefits-swiper', {
                slidesPerView: 1.2,
                spaceBetween: 20,
                centeredSlides: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            // Initialize Swiper for Types
            new Swiper('.types-swiper', {
                slidesPerView: 1.1,
                spaceBetween: 20,
                centeredSlides: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            // Initialize Swiper for Everyone
            new Swiper('.everyone-swiper', {
                slidesPerView: 1.5,
                spaceBetween: 15,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    }, []);

    const scrollToBenefits = () => {
        document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToWhat = () => {
        document.getElementById('what-is-yoga').scrollIntoView({ behavior: 'smooth' });
    };

    const findYogaCenter = () => {
        window.open('https://www.google.com/maps/search/centros+de+yoga+cerca+de+mi', '_blank');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Logo Bar */}
            <div className={`logo-bar fixed top-0 left-0 right-0 z-50 py-3 px-4 ${isBarTransparent ? 'transparent' : ''} ${!isBarVisible ? 'hidden-bar' : ''}`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="http://www.fundacionlacumbre.cl/" target="_blank" rel="noopener noreferrer" className="logo-container-item">
                        <img src="https://www.energyclub.cl/img/cms/LEY_DEL_DEPORTE/LOGOLACUMBRE.png" alt="Fundación La Cumbre" className="h-10 md:h-12" />
                    </a>
                    <a href="http://www.mindep.cl/" target="_blank" rel="noopener noreferrer" className="logo-container-item">
                        <img src="https://www.energyclub.cl/img/cms/LEY_DEL_DEPORTE/donaciones_logo.jpg" alt="Mindep" className="h-10 md:h-12" />
                    </a>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center text-white">
                <div className="video-container absolute inset-0 z-0 hidden md:block">
                    <iframe 
                        src="https://www.youtube.com/embed/DIh737Xqs0E?autoplay=1&mute=1&loop=1&playlist=DIh737Xqs0E&controls=1&showinfo=0&rel=0&modestbranding=1"
                        title="Yoga Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                
                <div className="hero-overlay absolute inset-0 z-10 md:hidden"></div>
                
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto md:hidden">
                    <h1 className="font-dm text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        Encuentra tu Equilibrio Interior
                    </h1>
                    <p className="font-inter text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
                        Descubre la práctica milenaria que transforma cuerpo, mente y espíritu
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
                        <button 
                            onClick={scrollToBenefits}
                            className="btn-primary bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                        >
                            Descubre sus beneficios
                        </button>
                        <button 
                            onClick={findYogaCenter}
                            className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all"
                        >
                            Encuentra un centro cercano
                        </button>
                    </div>
                </div>
            </section>

            {/* Mobile Video Section */}
            <section className="mobile-video-section py-12 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-dm text-3xl font-bold text-center mb-6 text-gray-900">
                        Descubre el Yoga
                    </h2>
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-xl"
                            src="https://www.youtube.com/embed/DIh737Xqs0E?controls=1&showinfo=0&rel=0&modestbranding=1"
                            title="Yoga Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-dm text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Beneficios del Yoga
                        </h2>
                        <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                            Una práctica holística que transforma tu vida desde adentro hacia afuera
                        </p>
                    </div>

                    {/* Desktop Grid */}
                    <div className="desktop-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Flexibilidad Mejorada",
                                description: "Aumenta tu rango de movimiento y previene lesiones con posturas que estiran cada músculo",
                                icon: "🧘‍♀️"
                            },
                            {
                                title: "Paz Mental",
                                description: "Reduce el estrés y la ansiedad a través de la meditación y respiración consciente",
                                icon: "🕉️"
                            },
                            {
                                title: "Fuerza Interior",
                                description: "Desarrolla fuerza muscular y resistencia mientras mantienes posturas desafiantes",
                                icon: "💪"
                            },
                            {
                                title: "Mejor Postura",
                                description: "Corrige desequilibrios posturales y alivia dolores de espalda crónicos",
                                icon: "🌟"
                            },
                            {
                                title: "Salud Cardiovascular",
                                description: "Mejora la circulación, reduce la presión arterial y fortalece el corazón",
                                icon: "❤️"
                            },
                            {
                                title: "Conexión Espiritual",
                                description: "Profundiza tu autoconocimiento y encuentra equilibrio en tu vida diaria",
                                icon: "🙏"
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="card-hover bg-gray-50 rounded-2xl p-8 text-center">
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="font-dm text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                                <p className="font-inter text-gray-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Swiper */}
                    <div className="mobile-swiper">
                        <div className="swiper benefits-swiper">
                            <div className="swiper-wrapper">
                                {[
                                    {
                                        title: "Flexibilidad Mejorada",
                                        description: "Aumenta tu rango de movimiento y previene lesiones con posturas que estiran cada músculo",
                                        icon: "🧘‍♀️"
                                    },
                                    {
                                        title: "Paz Mental",
                                        description: "Reduce el estrés y la ansiedad a través de la meditación y respiración consciente",
                                        icon: "🕉️"
                                    },
                                    {
                                        title: "Fuerza Interior",
                                        description: "Desarrolla fuerza muscular y resistencia mientras mantienes posturas desafiantes",
                                        icon: "💪"
                                    },
                                    {
                                        title: "Mejor Postura",
                                        description: "Corrige desequilibrios posturales y alivia dolores de espalda crónicos",
                                        icon: "🌟"
                                    },
                                    {
                                        title: "Salud Cardiovascular",
                                        description: "Mejora la circulación, reduce la presión arterial y fortalece el corazón",
                                        icon: "❤️"
                                    },
                                    {
                                        title: "Conexión Espiritual",
                                        description: "Profundiza tu autoconocimiento y encuentra equilibrio en tu vida diaria",
                                        icon: "🙏"
                                    }
                                ].map((benefit, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="bg-gray-50 rounded-2xl p-8 text-center h-full">
                                            <div className="text-5xl mb-4">{benefit.icon}</div>
                                            <h3 className="font-dm text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                                            <p className="font-inter text-gray-600 leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Yoga Section */}
            <section id="what-is-yoga" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-dm text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                ¿Qué es el Yoga?
                            </h2>
                            <p className="font-inter text-lg text-gray-700 mb-6 leading-relaxed">
                                El Yoga es una práctica milenaria originaria de la India que integra posturas físicas (asanas), 
                                técnicas de respiración (pranayama), meditación y filosofía para alcanzar la unión entre cuerpo, 
                                mente y espíritu.
                            </p>
                            <p className="font-inter text-lg text-gray-700 mb-6 leading-relaxed">
                                Más que ejercicio físico, el Yoga es un camino de autoconocimiento y transformación personal 
                                que ha beneficiado a millones de personas durante más de 5.000 años.
                            </p>
                            <button 
                                onClick={scrollToBenefits}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
                            >
                                Explora más
                            </button>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&h=600&fit=crop&q=90" 
                                alt="Práctica de Yoga" 
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Yoga Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-dm text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Tipos de Práctica
                        </h2>
                        <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                            Encuentra el estilo que mejor se adapta a tus necesidades y objetivos
                        </p>
                    </div>

                    {/* Desktop Grid */}
                    <div className="desktop-grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Hatha Yoga",
                                description: "Estilo tradicional que combina posturas físicas con técnicas de respiración. Ideal para principiantes y para desarrollar fundamentos sólidos.",
                                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=90"
                            },
                            {
                                title: "Vinyasa Yoga",
                                description: "Flujo dinámico que sincroniza movimiento con respiración. Perfecto para quienes buscan un práctica más activa y cardiovascular.",
                                image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop&q=90"
                            },
                            {
                                title: "Yin Yoga",
                                description: "Práctica meditativa con posturas mantenidas por varios minutos. Excelente para flexibilidad profunda y relajación del sistema nervioso.",
                                image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=400&fit=crop&q=90"
                            },
                            {
                                title: "Ashtanga Yoga",
                                description: "Secuencia rigurosa y estructurada que desarrolla fuerza, resistencia y disciplina. Para practicantes que buscan un desafío constante.",
                                image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop&q=90"
                            }
                        ].map((type, index) => (
                            <div key={index} className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
                                <img src={type.image} alt={type.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="font-dm text-2xl font-bold mb-3 text-gray-900">{type.title}</h3>
                                    <p className="font-inter text-gray-600 leading-relaxed">{type.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Swiper */}
                    <div className="mobile-swiper">
                        <div className="swiper types-swiper">
                            <div className="swiper-wrapper">
                                {[
                                    {
                                        title: "Hatha Yoga",
                                        description: "Estilo tradicional que combina posturas físicas con técnicas de respiración. Ideal para principiantes y para desarrollar fundamentos sólidos.",
                                        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=90"
                                    },
                                    {
                                        title: "Vinyasa Yoga",
                                        description: "Flujo dinámico que sincroniza movimiento con respiración. Perfecto para quienes buscan un práctica más activa y cardiovascular.",
                                        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop&q=90"
                                    },
                                    {
                                        title: "Yin Yoga",
                                        description: "Práctica meditativa con posturas mantenidas por varios minutos. Excelente para flexibilidad profunda y relajación del sistema nervioso.",
                                        image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=400&fit=crop&q=90"
                                    },
                                    {
                                        title: "Ashtanga Yoga",
                                        description: "Secuencia rigurosa y estructurada que desarrolla fuerza, resistencia y disciplina. Para practicantes que buscan un desafío constante.",
                                        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop&q=90"
                                    }
                                ].map((type, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full">
                                            <img src={type.image} alt={type.title} className="w-full h-48 object-cover" />
                                            <div className="p-6">
                                                <h3 className="font-dm text-2xl font-bold mb-3 text-gray-900">{type.title}</h3>
                                                <p className="font-inter text-gray-600 leading-relaxed">{type.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Yoga for Everyone Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-dm text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Yoga para Todos
                        </h2>
                        <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                            Sin importar tu edad, condición física o experiencia
                        </p>
                    </div>

                    {/* Desktop Grid */}
                    <div className="desktop-grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Principiantes",
                                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=500&fit=crop&q=90"
                            },
                            {
                                title: "Embarazadas",
                                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop&q=90"
                            },
                            {
                                title: "Seniors",
                                image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=400&h=500&fit=crop&q=90"
                            },
                            {
                                title: "Atletas",
                                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop&q=90"
                            }
                        ].map((category, index) => (
                            <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <img 
                                    src={category.image} 
                                    alt={category.title} 
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                    <h3 className="font-dm text-2xl font-bold text-white">{category.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Swiper */}
                    <div className="mobile-swiper">
                        <div className="swiper everyone-swiper">
                            <div className="swiper-wrapper">
                                {[
                                    {
                                        title: "Principiantes",
                                        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=500&fit=crop&q=90"
                                    },
                                    {
                                        title: "Embarazadas",
                                        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop&q=90"
                                    },
                                    {
                                        title: "Seniors",
                                        image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=400&h=500&fit=crop&q=90"
                                    },
                                    {
                                        title: "Atletas",
                                        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop&q=90"
                                    }
                                ].map((category, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                            <img 
                                                src={category.image} 
                                                alt={category.title} 
                                                className="w-full h-64 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                                <h3 className="font-dm text-2xl font-bold text-white">{category.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-dm text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Principios del Yoga
                        </h2>
                        <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                            Los fundamentos que guían cada práctica
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                number: "01",
                                title: "Ahimsa",
                                subtitle: "No violencia",
                                description: "Cultivar la compasión hacia uno mismo y los demás en pensamiento, palabra y acción"
                            },
                            {
                                number: "02",
                                title: "Pranayama",
                                subtitle: "Control de la respiración",
                                description: "Regular la energía vital a través de técnicas de respiración consciente"
                            },
                            {
                                number: "03",
                                title: "Dhyana",
                                subtitle: "Meditación",
                                description: "Aquietar la mente para alcanzar estados profundos de paz y claridad interior"
                            }
                        ].map((principle, index) => (
                            <div key={index} className="text-center">
                                <div className="text-6xl font-bold gradient-text mb-4">{principle.number}</div>
                                <h3 className="font-dm text-2xl font-bold mb-2 text-gray-900">{principle.title}</h3>
                                <p className="font-inter text-lg text-purple-600 mb-3">{principle.subtitle}</p>
                                <p className="font-inter text-gray-600 leading-relaxed">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-500 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-dm text-4xl md:text-5xl font-bold mb-6">
                        Comienza tu Viaje Hoy
                    </h2>
                    <p className="font-inter text-xl mb-8 opacity-90">
                        Da el primer paso hacia una vida más equilibrada, saludable y plena
                    </p>
                    <button 
                        onClick={findYogaCenter}
                        className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
                    >
                        Encuentra tu Centro de Yoga
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex justify-center gap-8 mb-6">
                        <a href="http://www.fundacionlacumbre.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                            Fundación La Cumbre
                        </a>
                        <a href="http://www.mindep.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                            Mindep
                        </a>
                    </div>
                    <p className="font-inter text-gray-400">
                        Hecho con 💜 para promover el bienestar y la conexión interior
                    </p>
                </div>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<YogaLanding />);
