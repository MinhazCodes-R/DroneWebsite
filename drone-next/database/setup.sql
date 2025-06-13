-- Create the database tables for the path-locator feature

-- Points table
CREATE TABLE IF NOT EXISTS points (
    id SERIAL PRIMARY KEY,
    point_id VARCHAR(255) UNIQUE NOT NULL,
    lat DECIMAL(10, 8) NOT NULL,
    lng DECIMAL(11, 8) NOT NULL,
    status VARCHAR(20) DEFAULT 'visible',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lines table
CREATE TABLE IF NOT EXISTS lines (
    id SERIAL PRIMARY KEY,
    line_id VARCHAR(255) UNIQUE NOT NULL,
    start_point_id VARCHAR(255) NOT NULL,
    end_point_id VARCHAR(255) NOT NULL,
    status VARCHAR(20) DEFAULT 'visible',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (start_point_id) REFERENCES points(point_id),
    FOREIGN KEY (end_point_id) REFERENCES points(point_id)
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_points_status ON points(status);
CREATE INDEX IF NOT EXISTS idx_points_point_id ON points(point_id);
CREATE INDEX IF NOT EXISTS idx_lines_status ON lines(status);
CREATE INDEX IF NOT EXISTS idx_lines_line_id ON lines(line_id);
CREATE INDEX IF NOT EXISTS idx_lines_start_point ON lines(start_point_id);
CREATE INDEX IF NOT EXISTS idx_lines_end_point ON lines(end_point_id);
