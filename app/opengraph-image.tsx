import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Alexis Manyrath | AI Engineer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0f0d0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1c1814 0%, transparent 50%), radial-gradient(circle at 75% 75%, #252018 0%, transparent 50%)',
          padding: '80px',
        }}
      >
        {/* Decorative element */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: '80px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#c9a227',
            opacity: 0.6,
          }}
        />
        
        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#f2ebe0',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Alexis Manyrath
          </div>
          
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              color: '#c9a227',
              letterSpacing: '-0.01em',
            }}
          >
            AI Engineer
          </div>
          
          <div
            style={{
              fontSize: 32,
              color: '#8a7e70',
              maxWidth: '800px',
              lineHeight: 1.4,
              marginTop: '20px',
            }}
          >
            Raw paths create spiky perspectives.
          </div>
          
          {/* Journey path */}
          <div
            style={{
              display: 'flex',
              gap: '15px',
              marginTop: '30px',
              flexWrap: 'wrap',
            }}
          >
            {['Physics', 'Economics', 'Data Science', 'AI Engineering'].map((item, index) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                }}
              >
                <div
                  style={{
                    background: '#252018',
                    color: '#8a7e70',
                    padding: '12px 24px',
                    borderRadius: '20px',
                    fontSize: 24,
                    border: '1px solid rgba(242, 235, 224, 0.1)',
                  }}
                >
                  {item}
                </div>
                {index < 3 && (
                  <div
                    style={{
                      width: '30px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #6b7c5c, #c96147)',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

