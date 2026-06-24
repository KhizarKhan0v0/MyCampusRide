import React, { useState, useEffect } from 'react';
import {
  Box, Container, Typography, Button, Grid, Card, CardContent, Chip, Stack
} from '@mui/material';
import {
  DirectionsBus, Person, Security, Login, HowToReg, School, LocalShipping,
  NotificationsActive, Map, Schedule, CheckCircle, Speed, Groups
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', overflow: 'hidden' }}>
      {/* Navigation Bar */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          bgcolor: scrollY > 50 ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
          borderBottom: scrollY > 50 ? '1px solid rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease',
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.5px',
              }}
            >
              MyCampusRide
            </Typography>
            <Box display="flex" gap={{ xs: 1, sm: 2 }}>
              <Button
                variant="text"
                startIcon={<Login sx={{ display: { xs: 'none', sm: 'inline-block' } }} />}
                onClick={() => navigate('/login')}
                sx={{
                  color: '#1E293B',
                  fontWeight: 600,
                  px: { xs: 1, sm: 2 },
                  minWidth: { xs: 'auto', sm: '64px' },
                  fontSize: { xs: '0.85rem', sm: '0.875rem' },
                  '&:hover': { bgcolor: 'rgba(14, 165, 233, 0.08)' },
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                startIcon={<HowToReg sx={{ display: { xs: 'none', sm: 'inline-block' } }} />}
                onClick={() => navigate('/register')}
                sx={{
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%)',
                  boxShadow: '0 4px 16px rgba(14, 165, 233, 0.3)',
                  fontWeight: 600,
                  px: { xs: 1.5, sm: 3 },
                  py: { xs: 0.5, sm: 1 },
                  fontSize: { xs: '0.85rem', sm: '0.875rem' },
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0284C7 0%, #0F766E 100%)',
                    boxShadow: '0 6px 20px rgba(14, 165, 233, 0.4)',
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          pt: { xs: 16, md: 20 },
          pb: { xs: 12, md: 16 },
          background: 'linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            left: -50,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="Campus Transportation Reimagined"
                sx={{
                  mb: 3,
                  bgcolor: 'rgba(14, 165, 233, 0.1)',
                  color: '#0EA5E9',
                  fontWeight: 600,
                  borderRadius: '8px',
                  animation: 'fadeInUp 0.8s ease-out',
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 900,
                  lineHeight: 1.2,
                  mb: 3,
                  color: '#0F172A',
                  letterSpacing: '-1px',
                  animation: 'fadeInUp 0.8s ease-out 0.1s backwards',
                }}
              >
                Your Journey,{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Simplified
                </Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: '#475569',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
                }}
              >
                Real-time bus tracking, instant notifications, and seamless campus
                commute management for students, drivers, and administrators.
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ animation: 'fadeInUp 0.8s ease-out 0.3s backwards' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/register')}
                  sx={{
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    boxShadow: '0 8px 24px rgba(14, 165, 233, 0.35)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0284C7 0%, #0F766E 100%)',
                      boxShadow: '0 12px 32px rgba(14, 165, 233, 0.45)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Start Your Journey
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/login')}
                  sx={{
                    borderColor: '#0EA5E9',
                    color: '#0EA5E9',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: '#0284C7',
                      bgcolor: 'rgba(14, 165, 233, 0.08)',
                      borderWidth: 2,
                    },
                  }}
                >
                  Sign In
                </Button>
              </Stack>
            </Grid>

            {/* Hero Illustration */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  animation: 'fadeInRight 1s ease-out',
                }}
              >
                <Box
                  sx={{
                    p: 6,
                    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
                    borderRadius: '24px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <DirectionsBus
                    sx={{
                      fontSize: { xs: 200, md: 280 },
                      color: '#0EA5E9',
                      opacity: 0.9,
                      display: 'block',
                      mx: 'auto',
                    }}
                  />
                </Box>

                {/* Floating Cards */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: -20,
                    bgcolor: 'white',
                    p: 2,
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    animation: 'float 4s ease-in-out infinite',
                  }}
                >
                  <NotificationsActive sx={{ color: '#F97316', fontSize: 32 }} />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: -20,
                    bgcolor: 'white',
                    p: 2,
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    animation: 'float 5s ease-in-out infinite',
                  }}
                >
                  <Map sx={{ color: '#14B8A6', fontSize: 32 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { icon: Groups, value: '1000+', label: 'Active Users' },
              { icon: DirectionsBus, value: '50+', label: 'Buses Tracked' },
              { icon: Map, value: '25+', label: 'Routes Managed' },
              { icon: CheckCircle, value: '99.9%', label: 'Uptime' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    animation: `fadeInUp 0.8s ease-out ${0.2 + index * 0.1}s backwards`,
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <stat.icon sx={{ fontSize: 32, color: 'white' }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 800, color: '#0F172A', mb: 1 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* User Types Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 800,
                mb: 2,
                color: '#0F172A',
              }}
            >
              Built for Everyone on Campus
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Tailored experiences for students, drivers, and administrators
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Students */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '20px',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#0EA5E9',
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(14, 165, 233, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: '18px',
                      background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <School sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#0F172A' }}>
                    For Students
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                    Track your bus in real-time, get arrival notifications, view schedules, and plan your commute efficiently.
                  </Typography>
                  <Stack spacing={1.5}>
                    {[
                      'Live bus tracking',
                      'Arrival notifications',
                      'Route schedules',
                      'Virtual transport card',
                    ].map((feature) => (
                      <Box key={feature} display="flex" alignItems="center" gap={1}>
                        <CheckCircle sx={{ fontSize: 20, color: '#10B981' }} />
                        <Typography variant="body2" color="text.secondary">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* Drivers */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '20px',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#14B8A6',
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(20, 184, 166, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: '18px',
                      background: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <LocalShipping sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#0F172A' }}>
                    For Drivers
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                    Simple interface to start trips, share location, manage routes, and communicate with students.
                  </Typography>
                  <Stack spacing={1.5}>
                    {[
                      'One-tap trip start',
                      'Automatic tracking',
                      'Route navigation',
                      'Student notifications',
                    ].map((feature) => (
                      <Box key={feature} display="flex" alignItems="center" gap={1}>
                        <CheckCircle sx={{ fontSize: 20, color: '#10B981' }} />
                        <Typography variant="body2" color="text.secondary">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* Admins */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '20px',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#F97316',
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(249, 115, 22, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: '18px',
                      background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <Security sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#0F172A' }}>
                    For Admins
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                    Comprehensive control panel to manage users, buses, routes, and monitor entire system operations.
                  </Typography>
                  <Stack spacing={1.5}>
                    {[
                      'User management',
                      'Fleet monitoring',
                      'Route optimization',
                      'Analytics dashboard',
                    ].map((feature) => (
                      <Box key={feature} display="flex" alignItems="center" gap={1}>
                        <CheckCircle sx={{ fontSize: 20, color: '#10B981' }} />
                        <Typography variant="body2" color="text.secondary">
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 800,
                mb: 2,
                color: '#0F172A',
              }}
            >
              Powerful Features
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Everything you need for seamless campus transportation
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                icon: Speed,
                title: 'Real-Time Tracking',
                description: 'Live GPS tracking with accurate ETAs and bus locations updated every second.',
              },
              {
                icon: NotificationsActive,
                title: 'Smart Notifications',
                description: 'Instant alerts for bus arrivals, delays, route changes, and important updates.',
              },
              {
                icon: Schedule,
                title: 'Schedule Management',
                description: 'View and manage complete bus schedules with easy-to-read timetables.',
              },
              {
                icon: Map,
                title: 'Route Planning',
                description: 'Optimize routes with interactive maps and detailed stop information.',
              },
              {
                icon: Person,
                title: 'User Profiles',
                description: 'Personalized dashboards with quick access to frequently used features.',
              },
              {
                icon: Security,
                title: 'Secure Access',
                description: 'Role-based permissions ensuring data security and user privacy.',
              },
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: '16px',
                    bgcolor: '#F8FAFC',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'white',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <feature.icon sx={{ fontSize: 28, color: 'white' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#0F172A' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default LandingPage;